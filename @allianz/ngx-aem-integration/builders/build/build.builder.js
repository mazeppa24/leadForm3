"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
const generate_js_loader_1 = require("../utils/generate-js-loader");
exports.default = (0, architect_1.createBuilder)(buildBuilder);
function buildBuilder(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            context.logger.info(`Staring the AEM Build. Building the application using target ${options.buildTarget}`);
            const target = (0, architect_1.targetFromTargetString)(options.buildTarget);
            yield buildTargetAndWaitForResult(target, options.buildArgs, context);
            context.logger.info(`GenerateJSLoader: Starting`);
            const buildTarget = yield context.getTargetOptions(target);
            context.logger.info(`Using "${buildTarget.outputPath}" and "${buildTarget.index}" to determine the index.html`);
            yield (0, generate_js_loader_1.generateJsLoader)(buildTarget.outputPath, buildTarget.index);
            context.logger.info('GenerateJSLoader: Finish');
        }
        catch (error) {
            context.logger.error(error.message);
            return { success: false, error: error.message };
        }
        return { success: true };
    });
}
function buildTargetAndWaitForResult(target_1) {
    return tslib_1.__awaiter(this, arguments, void 0, function* (target, buildArgs = [], context) {
        const options = convertBuildArgs(buildArgs);
        context.logger.info(`Overwriting the default build with the following options: \n ${JSON.stringify(options, null, 2)}`);
        const builder = yield context.scheduleTarget(target, options);
        const output = yield builder.output.toPromise();
        if (!output.success) {
            context.logger.error(`Error during build target step ${output === null || output === void 0 ? void 0 : output.error}`);
            throw new Error(output.error);
        }
    });
}
/**
 * Converts the array of arguments to a JsonObject that can be forwarded to the builder
 * @param buildArgs An array of build arguments, in style key=value
 * @return A JsonObject with all the arguments.
 */
function convertBuildArgs(buildArgs) {
    const returnedArguments = {};
    for (const arg of buildArgs) {
        const argSplitted = arg.split('=');
        const key = argSplitted[0];
        const value = argSplitted[1];
        returnedArguments[key] = value;
    }
    return returnedArguments;
}
//# sourceMappingURL=build.builder.js.map