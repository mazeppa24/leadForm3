"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpileLoader = transpileLoader;
const fs = require("fs-extra");
const typescript_1 = require("typescript");
function transpileLoader(scripts, css) {
    const inputTs = fs.readFileSync(__dirname + '/aem-loader-template.ts', 'utf8');
    let replacedTs = inputTs.toString().replace('$REPLACEJS$', scripts.join("','"));
    replacedTs = replacedTs.toString().replace('$REPLACECSS$', css.join("','"));
    return (0, typescript_1.transpile)(replacedTs, { target: typescript_1.ScriptTarget.ES3 });
}
//# sourceMappingURL=transpile-loader.js.map