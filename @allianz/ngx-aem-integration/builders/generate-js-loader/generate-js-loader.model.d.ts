import { JsonObject } from '@angular-devkit/core';
export interface GenerateJsLoaderOptions extends JsonObject {
    outputPath?: string;
    index?: string;
}
