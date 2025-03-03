import { JsonObject } from '@angular-devkit/core';
export interface CleanEnvArgsModel extends JsonObject {
    /**
     * The path (path + file name) of the args file
     */
    filePath: string;
}
