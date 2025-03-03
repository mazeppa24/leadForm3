"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minifyLoader = minifyLoader;
const tslib_1 = require("tslib");
const terser_1 = require("terser");
function minifyLoader(javascript) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (yield (0, terser_1.minify)(javascript, {
            compress: { dead_code: false },
        })).code;
    });
}
//# sourceMappingURL=minify-loader.js.map