"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchematicTestSetup = exports.createTestLibrary = exports.createApp = exports.createWorkspace = exports.Collection = void 0;
const core_1 = require("@angular-devkit/core");
const testing_1 = require("@angular-devkit/core/node/testing");
const schematics_1 = require("@angular-devkit/schematics");
const testing_2 = require("@angular-devkit/schematics/testing");
const shx = require("shelljs");
var Collection;
(function (Collection) {
    Collection[Collection["SCHEMATICS"] = 1] = "SCHEMATICS";
    Collection[Collection["MIGRATIONS"] = 2] = "MIGRATIONS";
})(Collection || (exports.Collection = Collection = {}));
async function createWorkspace(runner, tree) {
    return runner.runExternalSchematic('@schematics/angular', 'workspace', {
        name: 'workspace',
        version: '1', // angular.json schema version
        newProjectRoot: 'projects',
    }, tree);
}
exports.createWorkspace = createWorkspace;
async function createApp(runner, tree, options = {}) {
    // temporary fix to set standalone: false that the starter app tests still work.
    return runner.runExternalSchematic('@schematics/angular', 'application', options, tree);
}
exports.createApp = createApp;
async function createTestLibrary(runner, tree, options = {}) {
    return runner.runExternalSchematic('@schematics/angular', 'library', { name: 'ndbx-testing-library' }, tree);
}
exports.createTestLibrary = createTestLibrary;
/**
 * Helper for setting up everything needed for the schematic tests.
 * It creates things like the TempScopedNodeJsSyncHost and exposes everything and
 * registers the beforeEach and afterEach hooks for jasmine.
 *
 * It also gives you access to functions:
 * + writeFile: makes it possibble to write to the tempFileSystemHost and also updates the hostTree
 * + syncTreeToFileSystem: syncs the whole app tree to the disk
 * + runMigration: call to run the schematic name you specified in the constructor
 * @example
 * ```ts
 * describe('my schematic tests', () => {
 *   const testSetup = new SchematicTestSetup('01-my-schematic-name');
 *
 *   it('should do something', async () => {
 *     testSetup.writeFile('/index.ts', `
 *       import {Foo} from '@aposin/ng-aquila';
 *
 *       export class TestClass {}
 *     `);
 *
 *     await testSetup.runMigration({ project: 'ndbx-testing' });
 *     expect(something).toBeTruthy();
 *   });
 * });
 *```
 *
 * You can also use destructuring to get the methods for some cleaner code:
 * const testSetup = new SchematicTestSetup('01-my-schematic-name');
 * let { writeFile, runMigration, warnOutput } = testSetup;
 *
 * WARNING: it doesn't work on properties like runner or appTree as they are undefined
 * at that time
 */
class SchematicTestSetup {
    constructor(schematicName, collection = Collection.MIGRATIONS) {
        this.schematicName = schematicName;
        this.collection = collection;
        this.appTreeName = 'ndbx-testing';
        this.appTreeNameStandalone = 'ndbx-testing-standalone';
        this.init();
    }
    init() {
        beforeEach(async () => {
            const schematics = this.collection === Collection.MIGRATIONS ? require.resolve('../../migrations.json') : require.resolve('../../collection.json');
            this.runner = new testing_2.SchematicTestRunner('test', schematics);
            this.tempFileSystemHost = new testing_1.TempScopedNodeJsSyncHost();
            this.hostTree = new schematics_1.HostTree(this.tempFileSystemHost);
            // create workspace
            const workspaceTree = await createWorkspace(this.runner, this.hostTree);
            // create module based app
            this.appTree = await createApp(this.runner, workspaceTree, { name: this.appTreeName, standalone: false });
            this.createFileDir(this.appTree);
            // create standalone app
            this.appTreeStandalone = await createApp(this.runner, workspaceTree, { name: this.appTreeNameStandalone, standalone: true });
            this.createFileDir(this.appTreeStandalone);
        });
        afterEach(async () => {
            shx.cd(this.previousWorkingDir);
            shx.rm('-r', this.tmpDirPath);
        });
    }
    /**
     * Create file directory, remove comments and add ts files
     */
    createFileDir(testApp) {
        const testAppTsconfigPath = 'projects/' + this.appTreeName + '/tsconfig.app.json';
        // remove comments and parse json
        const testAppTsconfig = JSON.parse(testApp.readContent(testAppTsconfigPath).replace(/\/\*.*\*\//g, ''));
        // include all TypeScript files in the project. Otherwise all test input
        // files won't be part of the program and cannot be migrated.
        testAppTsconfig.include.push('src/**/*.ts');
        testApp.overwrite(testAppTsconfigPath, JSON.stringify(testAppTsconfig, null, 2));
        this.syncTreeToFileSystem(testApp);
        this.warnOutput = [];
        this.infoOutput = [];
        this.errorOutput = [];
        this.runner.logger.subscribe(logEntry => {
            if (logEntry.level === 'warn') {
                this.warnOutput.push(logEntry.message);
            }
            else if (logEntry.level === 'info') {
                this.infoOutput.push(logEntry.message);
            }
            else if (logEntry.level === 'error') {
                this.errorOutput.push(logEntry.message);
            }
        });
        this.previousWorkingDir = shx.pwd();
        this.tmpDirPath = (0, core_1.getSystemPath)(this.tempFileSystemHost.root);
        // Switch into the temporary directory path. This allows us to run
        // the schematic against our custom unit test tree.
        shx.cd(this.tmpDirPath);
    }
    /**
     * Creates or overwrites a file on the disk and in the virtual Tree.
     */
    writeFile(filePath, content) {
        // Update the temp file system host to reflect the changes in the real file system.
        // This is still necessary since we depend on the real file system for parsing the
        // TypeScript project.
        this.tempFileSystemHost.sync.write((0, core_1.normalize)(filePath), core_1.virtualFs.stringToFileBuffer(content));
        if (this.hostTree.exists(filePath)) {
            this.hostTree.overwrite(filePath, content);
        }
        else {
            this.hostTree.create(filePath, content);
        }
    }
    /**
     * Deletes file on the disk and in the virtual Tree.
     */
    deleteFile(filePath) {
        // Update the temp file system host to reflect the changes in the real file system.
        // This is still necessary since we depend on the real file system for parsing the
        // TypeScript project.
        this.tempFileSystemHost.sync.delete((0, core_1.normalize)(filePath));
        this.hostTree.delete(filePath);
    }
    /**
     * Syncs the whole virtual tree to the disk.
     */
    syncTreeToFileSystem(appTree) {
        // Since the TypeScript compiler API expects all files to be present on the real file system, we
        // map every file in the app tree to a temporary location on the file system.
        appTree.files.forEach(f => this.writeFile(f, appTree.readContent(f)));
    }
    /**
     * Run your migration.
     */
    async runMigration(options = {}) {
        return this.runner.runSchematic(this.schematicName, options, this.appTree);
    }
    getWorkspaceConfig() {
        return JSON.parse(this.appTree.readContent('/angular.json'));
    }
}
exports.SchematicTestSetup = SchematicTestSetup;
//# sourceMappingURL=test-setup.js.map