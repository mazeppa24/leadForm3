"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const architect_1 = require("@angular-devkit/architect");
const args_file_1 = require("../../utils/args-file");
exports.default = (0, architect_1.createBuilder)(generateEnvArgsBuilder);
/**
 * This builder generates a file with all the variables from the env that match a particular prefix.
 */
function generateEnvArgsBuilder(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const project = context.target.project;
            context.logger.info(`Starting the "generateEnvArgsBuilder" for project "${project}" with options ${JSON.stringify(options)}`);
            const envVariables = getEnvVariables(options.prefix);
            const fileContent = `export const ENV_ARGS = ${JSON.stringify(envVariables)};`;
            (0, args_file_1.generateFile)(options.filePath, fileContent);
            context.logger.info(`Setting ENV_ARGS for environment replacement to: ${JSON.stringify(envVariables, undefined, 4)}`);
        }
        catch (error) {
            context.logger.error(error.message);
            return { success: false };
        }
        return { success: true };
    });
}
/**
 * Get all the env variables that start with the provided prefix.
 * And transform in camel case removing the prefix in the process
 * @param prefix The prefix to identify the env variables
 */
function getEnvVariables(prefix) {
    const returned = {};
    Object.keys(process.env)
        .filter((key) => key.startsWith(prefix))
        .forEach((key) => (returned[convertToCamelCase(prefix, key)] = process.env[key]));
    return returned;
}
/**
 * This functions converts the env args from SNAKE_CASE to camelCase.
 * Removing the prefix
 * @param prefix The prefix of the env variables
 * @param key The env variable
 */
const convertToCamelCase = (prefix, key) => key
    .replace(prefix, '')
    .toLowerCase()
    .replace(/_+(\w|$)/g, ($$, $1) => {
    return $1.toUpperCase();
});
//# sourceMappingURL=generate-env-args.builder.js.map