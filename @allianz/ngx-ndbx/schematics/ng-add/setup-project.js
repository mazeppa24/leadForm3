"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const utility_1 = require("@schematics/angular/utility");
const util_1 = require("@schematics/angular/utility/standalone/util");
const jsonc_parser_1 = require("jsonc-parser");
const version_names_1 = require("./version-names");
function default_1(options) {
    return (host, context) => {
        (0, version_names_1.installAllPeerDependencies)(host);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return (0, schematics_2.chain)([addNdbxTheme(options), addIconModule(options), addNdbxFavicon(options)]);
    };
}
exports.default = default_1;
function addNdbxTheme(options) {
    return async (host) => {
        const workspace = await (0, utility_1.readWorkspace)(host);
        const project = (0, schematics_1.getProjectFromWorkspace)(workspace, options.project);
        const newFilePath = 'node_modules/@allianz/ngx-ndbx/css/ndbx-base.css';
        const buildOptions = (0, schematics_1.getProjectTargetOptions)(project, 'build');
        let styles = buildOptions.styles;
        if (!styles) {
            styles = [newFilePath];
        }
        else if (!styles.includes(newFilePath)) {
            styles.push(newFilePath);
        }
        const themeToAdd = options.type === 'b2b' ? 'ndbx-expert.css' : 'ndbx.css';
        styles.push(`node_modules/@allianz/ngx-ndbx/css/themes/${themeToAdd}`);
        return (0, utility_1.writeWorkspace)(host, workspace);
    };
}
function addIconModule(options) {
    return async (tree) => {
        const mainFilePath = await (0, util_1.getMainFilePath)(tree, options.project);
        if ((0, schematics_1.isStandaloneApp)(tree, mainFilePath)) {
            return (0, utility_1.addRootProvider)(options.project, ({ code, external }) => code `${external('provideNdbxIcons', '@allianz/ngx-ndbx/icon')}()`);
        }
        return (0, utility_1.addRootImport)(options.project, ({ code, external }) => code `${external('NdbxIconModule', '@allianz/ngx-ndbx/icon')}`);
    };
}
function addNdbxFavicon(_options) {
    return async (tree, context) => {
        var _a;
        const workspace = await (0, utility_1.readWorkspace)(tree);
        const project = (0, schematics_1.getProjectFromWorkspace)(workspace, _options.project);
        const sourceRoot = project.sourceRoot || '';
        const indexHtml = ((_a = tree.read(`${sourceRoot}/index.html`)) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        const defaultFaviconTag = '<link rel="icon" type="image/x-icon" href="favicon.ico">';
        if (indexHtml.includes(defaultFaviconTag)) {
            const newIndexHtml = indexHtml.replace(defaultFaviconTag, '');
            tree.overwrite(`${sourceRoot}/index.html`, newIndexHtml);
        }
        const faviconTags = [
            '<link rel="icon" href="/favicon.ico" sizes="any">',
            '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
            '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
            '<link rel="manifest" href="/manifest.webmanifest">',
        ];
        faviconTags.forEach(tag => {
            if (!indexHtml.includes(tag)) {
                (0, schematics_1.appendHtmlElementToHead)(tree, `${sourceRoot}/index.html`, tag);
            }
        });
        updateManifestJson(tree, sourceRoot);
        updateAngularJson(tree, context, workspace);
        return (0, schematics_2.mergeWith)((0, schematics_2.apply)((0, schematics_2.url)('./files'), [(0, schematics_2.move)(project.sourceRoot)]), schematics_2.MergeStrategy.Overwrite);
    };
    function updateAngularJson(host, context, workspace) {
        var _a, _b;
        try {
            verifyJsonFile('/angular.json', host);
            const angularJson = JSON.parse(host.read('/angular.json').toString('utf-8'));
            for (const projectKey in angularJson.projects) {
                // eslint-disable-next-line no-prototype-builtins
                if (angularJson.projects.hasOwnProperty(projectKey)) {
                    const project = angularJson.projects[projectKey];
                    const buildOptions = (_b = (_a = project.architect) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.options;
                    const sourceRoot = project.sourceRoot || '';
                    const faviconSvg = `${sourceRoot}/favicon.svg`;
                    const manifestFile = `${sourceRoot}/manifest.webmanifest`;
                    if (!buildOptions.assets) {
                        buildOptions.assets = [faviconSvg, manifestFile];
                    }
                    else {
                        if (!buildOptions.assets.includes(faviconSvg)) {
                            buildOptions.assets.push(faviconSvg);
                        }
                        if (!buildOptions.assets.includes(manifestFile)) {
                            buildOptions.assets.push(manifestFile);
                        }
                    }
                }
            }
            host.overwrite('/angular.json', JSON.stringify(angularJson, null, 2));
        }
        catch (e) {
            console.warn(`Failed to add favicon.svg to assets array of "angular.json" file.`);
            throw e;
        }
    }
    function updateManifestJson(host, sourceRoot) {
        try {
            const webmanifestIcons = [
                { src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
                { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
            ];
            const filename = `${sourceRoot}/manifest.webmanifest`;
            if (host.exists(filename)) {
                verifyJsonFile(filename, host);
                const oldJson = host.read(filename).toString('utf-8');
                const newJson = JSON.parse(oldJson);
                const iconsJson = newJson.icons || [];
                newJson.icons = iconsJson.concat(webmanifestIcons);
                host.overwrite(filename, JSON.stringify(newJson, null, 2));
            }
            else {
                const newJson = {
                    icons: webmanifestIcons,
                };
                host.create(filename, JSON.stringify(newJson, null, 2));
            }
            return host;
        }
        catch (e) {
            console.warn(`Failed to add icons array to "manifest.webmanifest" file.`);
            throw e;
        }
    }
}
function verifyJsonFile(file, host) {
    try {
        if (!host.exists(file)) {
            throw new Error(`Could not find ${file}`);
        }
        const angularJsonFile = host.read(file);
        if (!angularJsonFile) {
            throw new Error(`Failed to read ${file} content`);
        }
        const jsonParseErrors = [];
        (0, jsonc_parser_1.parse)(angularJsonFile.toString(), jsonParseErrors);
        if (jsonParseErrors.length) {
            throw new Error(`Failed to parse JSON for ${file}`);
        }
    }
    catch (e) {
        console.warn(`Invalid JSON file ${file}`);
        throw e;
    }
}
//# sourceMappingURL=setup-project.js.map