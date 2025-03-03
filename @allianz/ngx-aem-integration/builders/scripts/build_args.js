"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportArgs = exportArgs;
exports.restoreArgs = restoreArgs;
exports.cleanCmdArgs = cleanCmdArgs;
exports.convertCmdArgsObject = convertCmdArgsObject;
const args_file_1 = require("../utils/args-file");
// TODO: Get target path from angular cli
const BUILD_ARGS_FILENAME = './BUILD_ARGS.ts';
const BUILD_ARGS_CMD_ARGS = 'build-arg-';
/**
 * Exports the parameter into file
 *
 * @param argv
 */
function exportArgs(argv) {
    const convertedArgs = convertCmdArgsObject(argv);
    const fileContent = `export const BUILD_ARGS = ${JSON.stringify(convertedArgs)};`;
    (0, args_file_1.generateFile)(BUILD_ARGS_FILENAME, fileContent);
    console.log(`Setting BUILD_ARGS for environment replacement to: ${JSON.stringify(argv, undefined, 4)}`);
}
/**
 * Restores the original file
 */
function restoreArgs() {
    (0, args_file_1.restoreFile)(BUILD_ARGS_FILENAME);
    return Promise.resolve();
}
/**
 * Removes all parameters, that should not be forwarded.
 *
 */
function cleanCmdArgs(argv) {
    return argv.filter((arg) => arg.indexOf(BUILD_ARGS_CMD_ARGS) === -1);
}
/**
 * Convert the args to be without the BUILD_ARGS_CMD_ARGS prefix.
 *
 */
function convertCmdArgsObject(argv) {
    const result = {};
    for (let key in argv) {
        if (argv[key]) {
            const element = argv[key];
            const index = key.indexOf(BUILD_ARGS_CMD_ARGS);
            if (index !== -1) {
                key = key.substring(index + BUILD_ARGS_CMD_ARGS.length);
            }
            result[key] = element;
        }
    }
    return result;
}
//# sourceMappingURL=build_args.js.map