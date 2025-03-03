import { JsonObject } from '@angular-devkit/core';
export interface BuildOptions extends JsonObject {
    /**
     * The `target` that we will use to build the application.
     * The target should include:
     * - project
     * - target
     * - env (optional)
     * And should look like:
     * - `project:target`
     * - `project:target:env`
     */
    buildTarget: string;
    /**
     * List of arguments that will be forwarded to the `buildTarget`
     * The arguments will be validated by the `buildTarget` option so if you provide a wrong argument you will get an error.
     * They way that we expect the build args is the following key=value. Example. deployUrl=EXAMPLE
     * The main purpose of the following key is pass arguments via CMD to the aem build.
     * Example:
     * ng run project:build-aem --buildArgs=deployUrl=EXAMPLE_ONE --buildArgs=baseHref=EXAMPLE_TWO
     */
    buildArgs: string[];
}
