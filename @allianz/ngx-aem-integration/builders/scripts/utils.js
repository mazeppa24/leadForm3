"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
exports.gzipJsFiles = gzipJsFiles;
exports.runPostBuildTasks = runPostBuildTasks;
exports.root = root;
const tslib_1 = require("tslib");
const cli_1 = require("@angular/cli/lib/cli");
const events = require("events");
const fs = require("fs-extra");
const path = require("path");
const promisepipe_1 = require("promisepipe");
const zlib = require("zlib");
const generate_js_loader_1 = require("../utils/generate-js-loader");
const build_args_1 = require("./build_args");
const appRoot = require("app-root-path");
const chalk = require("chalk");
const glob_1 = require("glob");
const distFolderDef = 'dist';
const angularJSONPath = root('angular.json');
// eslint-disable-next-line
const angularJSON = require(angularJSONPath);
/**
 * Runs the build with the angular cli.
 *
 * @param {Array<string>} argv Argument options
 * @returns {Promise<void>} Promise of success
 */
function buildApp() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log(chalk.yellow('Starting compiling applications...'));
        const startMs = new Date().getTime();
        let standardInput;
        try {
            standardInput = process.stdin;
        }
        catch (e) {
            delete process.stdin;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            process.stdin = new events.EventEmitter();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            standardInput = process.stdin;
        }
        const cArgs = (0, build_args_1.cleanCmdArgs)([...process.argv.slice(2)]);
        try {
            console.log(chalk.yellow(`  Running build with arguments: ${cArgs}`));
            const startMsA = new Date().getTime();
            const exitCode = yield (0, cli_1.default)({
                cliArgs: cArgs,
            });
            if (typeof exitCode !== 'undefined' && exitCode !== 0) {
                throw Error('  NG CLI build failed');
            }
            else {
                const time = new Date().getTime() - startMsA;
                console.log(chalk.green(`  ✔ Successful application compile (${timeHuman(time)})`));
            }
        }
        catch (error) {
            console.log(error);
            console.log(chalk.red('  ✖ Error compiling application'));
            throw error;
        }
        const time = new Date().getTime() - startMs;
        console.log(chalk.green(`✔ Successful applications compile (${timeHuman(time)})`));
    });
}
/**
 * Gzips all js files in distFolder and its subfolders
 *
 * @param {string} distFolder Optional destination. Defaults to 'dist'
 * @returns {Promise<void>} success
 */
function gzipJsFiles(distFolder = distFolderDef) {
    return new Promise((resolve, reject) => {
        (0, glob_1.glob)(root(distFolder) + '/**/*.{js,css}')
            .then((files) => {
            const gzipPromises = [];
            files.forEach((file) => {
                gzipPromises.push((0, promisepipe_1.default)(fs.createReadStream(file), zlib.createGzip(), fs.createWriteStream(file + '.gz')));
            });
            Promise.all(gzipPromises).then(() => {
                resolve();
            }, (gzErr) => {
                reject(gzErr);
            });
        })
            .catch((err) => {
            return reject('Glob error while gzipping ' + err);
        });
    });
}
/**
 * Runs all post build tasks.
 * At the moment this is only the generation of the js loader.
 * The dist folder can either be given as a cmdline parameter (output-path and index)
 * or it will be retrieved from the angular.json file.
 *
 * Within the angular.json file the targets and architect parameter are supported in the project configuration.
 *
 * @param {string} argv The cmdline parameters
 * @returns {Promise<void>} Promise of success
 */
function runPostBuildTasks(argv) {
    console.log(chalk.yellow('Starting consolidating builds...'));
    const startMs = new Date().getTime();
    const postBuildPromises = [];
    const outputPathArg = argv['outputPath'];
    if (outputPathArg) {
        const indexFile = argv['index'];
        if (!indexFile) {
            return Promise.reject('If the output-path is supplied as a parameter, the index file also has to be given as a parameter');
        }
        if (fs.existsSync(outputPathArg) && indexFile) {
            postBuildPromises.push((0, generate_js_loader_1.generateJsLoader)(outputPathArg, indexFile));
        }
    }
    else {
        // TODO: Check if there is a way to use the angular cli api to get this info (To avoid the manual angular.json parsing):
        const projects = angularJSON.projects;
        if (!projects && projects.length === 0) {
            return Promise.reject('Unable to find any apps in `angular.json`.');
        }
        Object.keys(angularJSON.projects).forEach((projectName) => {
            const project = angularJSON.projects[projectName];
            if (argv.project && projectName !== argv.project) {
                return;
            }
            const locales = getTranspiledLocales(project, argv['configuration']);
            let outputPath;
            let indexFile;
            // There might be angular.json files that use architect and there might be some that use targets:
            outputPath = getDeepPath(['architect', 'build', 'options', 'outputPath'], project);
            indexFile = getDeepPath(['architect', 'build', 'options', 'index'], project);
            if (!outputPath && !indexFile) {
                outputPath = getDeepPath(['targets', 'build', 'options', 'outputPath'], project);
                indexFile = getDeepPath(['targets', 'build', 'options', 'index'], project);
            }
            if (fs.existsSync(outputPath) && indexFile) {
                if (locales.length === 0) {
                    postBuildPromises.push((0, generate_js_loader_1.generateJsLoader)(outputPath, indexFile).then(() => gzipJsFiles(outputPath)));
                }
                else {
                    locales.forEach((locale) => {
                        const outputPathWithLocal = `${outputPath}/${locale}`;
                        postBuildPromises.push((0, generate_js_loader_1.generateJsLoader)(outputPathWithLocal, indexFile).then(() => gzipJsFiles(outputPath)));
                    });
                }
            }
        });
    }
    if (postBuildPromises.length === 0) {
        return Promise.reject('Could not determine outputPath for the index.js file');
    }
    return Promise.all(postBuildPromises)
        .then(() => {
        const time = new Date().getTime() - startMs;
        console.log(chalk.green(`✔ Successful build consolidation (${timeHuman(time)})`));
    })
        .catch((err) => {
        console.log(err);
        console.log(chalk.red('✖ Error consolidating builds'));
        return Promise.reject(err);
    });
}
/**
 * Resolves given relative path from root to the absolute path.
 *
 * @param {string } srcPath path to resolve
 * @returns {string} absolute path
 */
function root(srcPath) {
    const base = appRoot.toString();
    return path.resolve(base, srcPath);
}
function timeHuman(ms) {
    let x = ms / 1000;
    const seconds = x % 60;
    x /= 60;
    const minutes = x % 60;
    if (minutes >= 1) {
        return `${Math.round(minutes)}min ${parseFloat(`${seconds}`).toFixed(2)}s`;
    }
    else {
        return `${parseFloat(`${seconds}`).toFixed(2)}s`;
    }
}
function getDeepPath(accessPath, object) {
    return accessPath.reduce((accumulator, currentValue) => {
        return accumulator && accumulator[currentValue] ? accumulator[currentValue] : undefined;
    }, object);
}
function getTranspiledLocales(project, configuration) {
    const defaultLocalizeOptions = getDeepPath(['architect'], project)
        ? getDeepPath(['architect', 'build', 'options', 'localize'], project)
        : getDeepPath(['targets', 'build', 'options', 'localize'], project);
    const configLocalizeOptions = getDeepPath(['architect'], project)
        ? getDeepPath(['architect', 'build', 'configurations', configuration, 'localize'], project)
        : getDeepPath(['targets', 'build', 'configurations', configuration, 'localize'], project);
    const allLocales = getAllLocales(project);
    let transpiledLocales = [];
    if (defaultLocalizeOptions) {
        if (defaultLocalizeOptions === true) {
            transpiledLocales = allLocales;
        }
        else if (Array.isArray(defaultLocalizeOptions)) {
            transpiledLocales = defaultLocalizeOptions;
        }
    }
    // If necessary, overwrite general localization options with the more specific localization options from the angular configuration.
    if (configLocalizeOptions) {
        if (configLocalizeOptions === true) {
            transpiledLocales = allLocales;
        }
        else if (Array.isArray(configLocalizeOptions)) {
            transpiledLocales = configLocalizeOptions;
        }
    }
    return transpiledLocales;
}
function getAllLocales(project) {
    let locales = [];
    const sourceLocale = getDeepPath(['i18n', 'sourceLocale'], project);
    const localeObject = getDeepPath(['i18n', 'locales'], project);
    if (sourceLocale) {
        locales.push(sourceLocale);
    }
    if (localeObject) {
        locales = locales.concat(Object.keys(localeObject));
    }
    return locales;
}
//# sourceMappingURL=utils.js.map