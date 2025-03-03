"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeData = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const data_1 = require("./data");
/** Upgrade data that will be used for the Angular Material ng-update schematic. */
exports.upgradeData = {
    attributeSelectors: data_1.attributeSelectors,
    classNames: data_1.classNames,
    constructorChecks: data_1.constructorChecks,
    cssSelectors: data_1.cssSelectors,
    elementSelectors: data_1.elementSelectors,
    inputNames: data_1.inputNames,
    methodCallChecks: data_1.methodCallChecks,
    outputNames: data_1.outputNames,
    propertyNames: data_1.propertyNames,
    symbolRemoval: data_1.symbolRemoval,
    cssTokens: {},
};
function default_1() {
    return (0, schematics_1.createMigrationSchematicRule)(schematics_1.TargetVersion.V18, [], exports.upgradeData, onMigrationComplete);
}
exports.default = default_1;
/** Function that will be called when the migration completed. */
function onMigrationComplete(context, targetVersion, hasFailures) {
    context.logger.info('');
    context.logger.info(`  ✓  Updated @allianz/ngx-ndbx to ${targetVersion}`);
    context.logger.info('');
    if (hasFailures) {
        context.logger.warn('  ⚠  Some issues were detected but could not be fixed automatically. Please check the output above and fix these issues manually.');
    }
}
//# sourceMappingURL=index.js.map