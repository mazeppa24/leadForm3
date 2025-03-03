"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
const args_file_1 = require("../../utils/args-file");
exports.default = (0, architect_1.createBuilder)(cleanEnvArgsBuilder);
/**
 * This builder just restore the ENV_ARGS file to its previous status.
 */
function cleanEnvArgsBuilder(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const project = context.target.project;
            context.logger.info(`Starting the "cleanEnvArgsBuilder" for project "${project}" with options ${JSON.stringify(options)}`);
            (0, args_file_1.restoreFile)(options.filePath);
            context.logger.info(`File "${options.filePath}" restored to its previous status`);
        }
        catch (error) {
            context.logger.error(error.message);
            return { success: false };
        }
        return { success: true };
    });
}
//# sourceMappingURL=clean-env-args.builder.js.map