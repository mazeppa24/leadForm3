"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpileAndSaveLoader = transpileAndSaveLoader;
const tslib_1 = require("tslib");
const fs = require("fs-extra");
const minify_loader_1 = require("./minify-loader");
const transpile_loader_1 = require("./transpile-loader");
function transpileAndSaveLoader(outputFilename, scripts, css) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const outputJs = (0, transpile_loader_1.transpileLoader)(scripts, css);
        try {
            const result = yield (0, minify_loader_1.minifyLoader)(outputJs);
            fs.writeFileSync(outputFilename, result);
            console.log(`Loader compiled and minified into ${outputFilename}`);
        }
        catch (error) {
            console.error('There was an issue during minification of the aem loader');
            console.error(error);
            throw error;
        }
    });
}
//# sourceMappingURL=transpile-and-save-loader.js.map