"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJsLoader = generateJsLoader;
const tslib_1 = require("tslib");
const fs = require("fs-extra");
const path = require("path");
const transpile_and_save_loader_1 = require("./transpile-and-save-loader");
const scriptSrcExtractRE = /(<script.*?><\/script>)/g;
const cssExtractRE = /<link rel="stylesheet" href="(.*?)">/g;
/**
 * Generates a js loader from the srcFile in srcPath.
 * Generating a js loader means extracting everything between <script ...... </script> then
 * wrapping this in document.write and writing this out in the scrPath as js file.
 *
 * @param {string} srcPath
 * @param {string} srcFile
 * @returns {Promise<void>} Promise of success
 */
function generateJsLoader(srcPath, srcFile) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // srcFile is given with a path, we only need the filename:
        if (srcFile) {
            // eslint-disable-next-line
            srcFile = srcFile.replace(/^.*[\\\/]/, '');
        }
        const content = fs.readFileSync(path.resolve(srcPath, srcFile), {
            encoding: 'utf-8',
        });
        let myMatch;
        const scripts = [];
        while ((myMatch = scriptSrcExtractRE.exec(content)) !== null) {
            scripts.push(myMatch[1]);
        }
        const css = [];
        while ((myMatch = cssExtractRE.exec(content)) !== null) {
            css.push(myMatch[1]);
        }
        if (scripts.length > 0 || css.length > 0) {
            const loaderName = path.parse(srcFile).name + '.js';
            yield (0, transpile_and_save_loader_1.transpileAndSaveLoader)(path.resolve(srcPath, loaderName), scripts, css);
            let replaced = false;
            let contentReplaced = content.toString().replace(scriptSrcExtractRE, () => {
                if (!replaced) {
                    replaced = true;
                    return `<script type="text/javascript" src="./${loaderName}"></script>`;
                }
                return '';
            });
            contentReplaced = contentReplaced.toString().replace(cssExtractRE, '');
            return fs.writeFile(path.resolve(srcPath, srcFile), contentReplaced);
        }
        return Promise.reject('No script tag found in output?');
    });
}
//# sourceMappingURL=generate-js-loader.js.map