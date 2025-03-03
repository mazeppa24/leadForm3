#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const build_args_1 = require("./build_args");
const utils_1 = require("./utils");
/* tslint:disable-next-line:no-unused-expression */
yargs
    .command('build [project]', 'Build the project. If no project is given, all projects are built.', {}, (argv) => {
    (0, build_args_1.exportArgs)(argv);
    (0, utils_1.buildApp)()
        .then(() => (0, utils_1.runPostBuildTasks)(argv))
        .then(() => (0, build_args_1.restoreArgs)())
        .then(() => process.exit(0))
        .catch((error) => {
        (0, build_args_1.restoreArgs)();
        console.error(error);
        process.exit(1);
    });
})
    .command('gzip [folder]', 'Gzips all js files in dist folder. Defaults to /dist', {}, (argv) => {
    (0, utils_1.gzipJsFiles)(argv.folder).catch((err) => {
        if (err) {
            console.log(err);
        }
        process.exit(1); // exit with error!
    });
})
    .command('prerender', "This project doesn't support prerendering", {}, () => {
    console.log("This project doesn't support prerendering");
})
    .demandCommand(1, 1)
    .help().argv;
//# sourceMappingURL=cmd.js.map