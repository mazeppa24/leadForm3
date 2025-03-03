import * as ts from 'typescript';
export declare const NDBX_IMPORT = "@allianz/ngx-ndbx";
export interface ResolvedImports {
    mainEntryPointImports: ts.ImportDeclaration[];
    resolvedModules: ResolvedModules;
}
export declare class ResolvedModules extends Map<string, ts.ImportSpecifier[]> {
}
/**
 * Visitor to find all imports from the main entry point
 * and resolve the secondary entry points from it.
 */
export declare class DocumentImportVisitor {
    typeChecker: ts.TypeChecker;
    importsMap: Map<ts.SourceFile, ResolvedImports>;
    constructor(typeChecker: ts.TypeChecker);
    visitNode(node: ts.Node): void;
    visitImportDeclaration(node: ts.ImportDeclaration): void;
    getModuleName(element: ts.Identifier): any | undefined;
    getDeclarationSymbolOfNode(node: ts.Node): ts.Symbol | undefined;
}
