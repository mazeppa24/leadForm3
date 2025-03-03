"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const version_names_1 = require("./version-names");
// this should run after the initial ng-add schematic so that the
// ngx-ndbx package is already installed
function default_1(options) {
    return (host, context) => {
        // most important here is the installation of the CDK
        // the ng-add-setup-project is importing from the CDK so we need to install it
        // first
        (0, version_names_1.installAllPeerDependencies)(host);
        const installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-aquila', options), [installTaskId]);
    };
}
exports.default = default_1;
//# sourceMappingURL=install-dependencies.js.map