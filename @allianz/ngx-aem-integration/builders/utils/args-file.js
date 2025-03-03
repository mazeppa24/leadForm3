"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = generateFile;
exports.restoreFile = restoreFile;
const fs = require("fs-extra");
/**
 * Name of the temporal file generated
 */
const TEMP_FILE_EXT = '.orig';
/**
 * Generate the args file. If the previous file exits, copy the previous file and store with a temporal extension
 * so we can restore the file later.
 * @param path The path to the file
 * @param content The content to the file
 */
function generateFile(path, content) {
    const rootPath = path;
    const tempFileRootPath = path + TEMP_FILE_EXT;
    if (fs.existsSync(rootPath)) {
        fs.moveSync(rootPath, tempFileRootPath, { overwrite: true });
    }
    fs.writeFileSync(path, content);
}
/**
 * Restore the previous temporal file, if exists
 * @param path The path to the file
 */
function restoreFile(path) {
    const rootPath = path;
    const tempFileRootPath = path + TEMP_FILE_EXT;
    if (fs.existsSync(tempFileRootPath)) {
        fs.moveSync(tempFileRootPath, rootPath, { overwrite: true });
    }
}
//# sourceMappingURL=args-file.js.map