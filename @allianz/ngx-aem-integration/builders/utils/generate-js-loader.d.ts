/**
 * Generates a js loader from the srcFile in srcPath.
 * Generating a js loader means extracting everything between <script ...... </script> then
 * wrapping this in document.write and writing this out in the scrPath as js file.
 *
 * @param {string} srcPath
 * @param {string} srcFile
 * @returns {Promise<void>} Promise of success
 */
export declare function generateJsLoader(srcPath: any, srcFile: any): Promise<void>;
