"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAngularApplicationProject = exports.createStringLiteral = void 0;
const ts = require("typescript");
function createStringLiteral(text, singleQuotes) {
    const literal = ts.factory.createStringLiteral(text);
    // See: https://github.com/microsoft/TypeScript/blob/master/src/compiler/utilities.ts#L584-L590
    literal.singleQuote = singleQuotes;
    return literal;
}
exports.createStringLiteral = createStringLiteral;
function isAngularApplicationProject(project) {
    var _a, _b;
    if (project.extensions.projectType !== 'application') {
        return false;
    }
    const builder = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get('build')) === null || _b === void 0 ? void 0 : _b.builder.toString();
    if (builder && (builder.includes('@angular-devkit/build-angular:browser') || builder.includes('@angular-builders/custom-webpack:browser'))) {
        return true;
    }
    return false;
}
exports.isAngularApplicationProject = isAngularApplicationProject;
//# sourceMappingURL=utils.js.map