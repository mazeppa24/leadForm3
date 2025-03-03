import { JsonObject } from '@angular-devkit/core';
export interface GenerateEnvArgsOptions extends JsonObject {
    /**
     * The path (path + file name) of the args file
     */
    filePath: string;
    /**
     * Prefix that should have the env values for example `NGX_AEM_ENV_ARGS_`
     */
    prefix: string;
}
