"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const package_config_1 = require("./package-config");
const version_names_1 = require("./version-names");
function default_1(options) {
    return (host, context) => {
        (0, package_config_1.addPackageToPackageJson)(host, '@allianz/ngx-ndbx', `${version_names_1.ndbxVersion}`);
        // the angular cli just adds `@allianz/ngx-ndbx` to the package.json but it is not installed
        // yet so we run the install first before we install the peer dependencies
        const installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        context.addTask(new tasks_1.RunSchematicTask('ng-add-peer-dependencies', options), [installTaskId]);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map