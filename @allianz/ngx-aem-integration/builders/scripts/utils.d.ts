/**
 * Runs the build with the angular cli.
 *
 * @param {Array<string>} argv Argument options
 * @returns {Promise<void>} Promise of success
 */
export declare function buildApp(): Promise<void>;
/**
 * Gzips all js files in distFolder and its subfolders
 *
 * @param {string} distFolder Optional destination. Defaults to 'dist'
 * @returns {Promise<void>} success
 */
export declare function gzipJsFiles(distFolder?: string): Promise<void>;
/**
 * Runs all post build tasks.
 * At the moment this is only the generation of the js loader.
 * The dist folder can either be given as a cmdline parameter (output-path and index)
 * or it will be retrieved from the angular.json file.
 *
 * Within the angular.json file the targets and architect parameter are supported in the project configuration.
 *
 * @param {string} argv The cmdline parameters
 * @returns {Promise<void>} Promise of success
 */
export declare function runPostBuildTasks(argv: any): Promise<void>;
/**
 * Resolves given relative path from root to the absolute path.
 *
 * @param {string } srcPath path to resolve
 * @returns {string} absolute path
 */
export declare function root(srcPath: string): string;
