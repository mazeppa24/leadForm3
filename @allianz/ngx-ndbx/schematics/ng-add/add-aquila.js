"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
// this should run after the initial ng-add schematic so that the
// ngx-ndbx package is already installed
function default_1(options) {
    return (host, context) => {
        const aquilaNgAddTaskId = context.addTask(new tasks_1.RunSchematicTask('@aposin/ng-aquila', 'ng-add', { project: options.project, type: options.type, noTheme: true }));
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', options), [aquilaNgAddTaskId]);
    };
}
exports.default = default_1;
//# sourceMappingURL=add-aquila.js.map