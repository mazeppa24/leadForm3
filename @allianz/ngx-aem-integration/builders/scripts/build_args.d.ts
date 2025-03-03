/**
 * Exports the parameter into file
 *
 * @param argv
 */
export declare function exportArgs(argv: object): void;
/**
 * Restores the original file
 */
export declare function restoreArgs(): Promise<void>;
/**
 * Removes all parameters, that should not be forwarded.
 *
 */
export declare function cleanCmdArgs(argv: string[]): string[];
/**
 * Convert the args to be without the BUILD_ARGS_CMD_ARGS prefix.
 *
 */
export declare function convertCmdArgsObject(argv: object): object;
