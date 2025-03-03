/**
 * Generate the args file. If the previous file exits, copy the previous file and store with a temporal extension
 * so we can restore the file later.
 * @param path The path to the file
 * @param content The content to the file
 */
export declare function generateFile(path: string, content: string): void;
/**
 * Restore the previous temporal file, if exists
 * @param path The path to the file
 */
export declare function restoreFile(path: string): void;
