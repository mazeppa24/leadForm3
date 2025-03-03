"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
const generate_js_loader_1 = require("../utils/generate-js-loader");
exports.default = (0, architect_1.createBuilder)(generateJsLoaderBuilder);
function generateJsLoaderBuilder(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const project = context.target.project;
            context.logger.info(`Starting the "generateJsLoaderBuilder" for project "${project}" with options ${JSON.stringify(options)}`);
            yield (0, generate_js_loader_1.generateJsLoader)(options.outputPath, options.index);
        }
        catch (error) {
            context.logger.error(error.message);
            return { success: false };
        }
        return { success: true };
    });
}
//# sourceMappingURL=generate-js-loader.builder.js.map