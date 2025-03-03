"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentImportVisitor = exports.ResolvedModules = exports.NDBX_IMPORT = void 0;
const ts = require("typescript");
exports.NDBX_IMPORT = '@allianz/ngx-ndbx';
const ALLIANZ_NDBX_FILEPATH_REGEX = new RegExp(`${exports.NDBX_IMPORT}/(.*?)/`);
const ENTRY_POINT_MAPPINGS = require('./library-symbols.json');
// since there can be multiple separate imports from @allianz/ngx-ndbx we
// want to group all symbols under the new imports that's why we use a Map here
// e.g.
// import { NxDropdownComponent } from '@allianz/ngx-ndbx'
// import { NxDropdownItemComponent } from '@allianz/ngx-ndbx'
// should be resolved to
// import { NxDropdownComponent, NxDropdownItemComponent } from '@allianz/ngx-ndbx/dropdown'
class ResolvedModules extends Map {
}
exports.ResolvedModules = ResolvedModules;
/**
 * Visitor to find all imports from the main entry point
 * and resolve the secondary entry points from it.
 */
class DocumentImportVisitor {
    constructor(typeChecker) {
        this.typeChecker = typeChecker;
        this.importsMap = new Map();
    }
    visitNode(node) {
        if (ts.isImportDeclaration(node)) {
            this.visitImportDeclaration(node);
        }
        ts.forEachChild(node, n => this.visitNode(n));
    }
    visitImportDeclaration(node) {
        // if it is not imported from the library main entry point
        // or the declaration has no importclauses/namedimports
        // we can savely quit
        if (node.moduleSpecifier.text !== exports.NDBX_IMPORT) {
            return;
        }
        if (!node.importClause || !node.importClause.namedBindings) {
            return;
        }
        const namedImports = node.importClause.namedBindings;
        if (!namedImports.elements || !namedImports.elements.length) {
            return;
        }
        const sourceFile = node.getSourceFile();
        let resolvedImports = this.importsMap.get(sourceFile);
        if (!resolvedImports) {
            resolvedImports = {
                mainEntryPointImports: [],
                resolvedModules: new Map(),
            };
        }
        resolvedImports.mainEntryPointImports.push(node);
        namedImports.elements.forEach(importSpecifier => {
            const elementName = importSpecifier.propertyName ? importSpecifier.propertyName : importSpecifier.name;
            const moduleName = this.getModuleName(elementName) || ENTRY_POINT_MAPPINGS[elementName.text] || null;
            // if the module could not be resolved we just do nothing
            // as it is an error already
            // the import will be removed but the users will see errors
            // where they used the symbols in code and have to fix it manually
            if (!moduleName) {
                return;
            }
            let elements = resolvedImports.resolvedModules.get(moduleName);
            if (!elements) {
                elements = [];
            }
            elements.push(importSpecifier);
            resolvedImports.resolvedModules.set(moduleName, elements);
        });
        this.importsMap.set(sourceFile, resolvedImports);
    }
    getModuleName(element) {
        const symbol = this.getDeclarationSymbolOfNode(element);
        // If the symbol can't be found, or no declaration could be found within
        // the symbol return undefined.
        if (!symbol || !(symbol.valueDeclaration || (symbol.declarations && symbol.declarations.length !== 0))) {
            return;
        }
        const resolvedNode = symbol.valueDeclaration || symbol.declarations[0];
        const sourceFile = resolvedNode.getSourceFile().fileName;
        const matches = sourceFile.match(ALLIANZ_NDBX_FILEPATH_REGEX);
        return matches ? matches[1] : null;
    }
    getDeclarationSymbolOfNode(node) {
        const symbol = this.typeChecker.getSymbolAtLocation(node);
        // Symbols can be aliases of the declaration symbol. e.g. in named import specifiers.
        // We need to resolve the aliased symbol back to the declaration symbol.
        if (symbol && (symbol.flags & ts.SymbolFlags.Alias) !== 0) {
            return this.typeChecker.getAliasedSymbol(symbol);
        }
        return symbol;
    }
}
exports.DocumentImportVisitor = DocumentImportVisitor;
//# sourceMappingURL=documentImportVisitor.js.map