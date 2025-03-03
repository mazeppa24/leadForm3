import { TempScopedNodeJsSyncHost } from '@angular-devkit/core/node/testing';
import { HostTree, Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
export declare enum Collection {
    SCHEMATICS = 1,
    MIGRATIONS = 2
}
export declare function createWorkspace(runner: SchematicTestRunner, tree?: Tree): Promise<UnitTestTree>;
export declare function createApp(runner: SchematicTestRunner, tree: Tree, options?: {}): Promise<UnitTestTree>;
export declare function createTestLibrary(runner: SchematicTestRunner, tree?: Tree, options?: {}): Promise<UnitTestTree>;
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
export declare class SchematicTestSetup {
    readonly schematicName: string;
    readonly collection: Collection;
    runner: SchematicTestRunner;
    tempFileSystemHost: TempScopedNodeJsSyncHost;
    tmpDirPath: string;
    previousWorkingDir: string;
    warnOutput: string[];
    infoOutput: string[];
    errorOutput: string[];
    hostTree: HostTree;
    appTree: UnitTestTree;
    appTreeStandalone: UnitTestTree;
    appTreeName: string;
    appTreeNameStandalone: string;
    constructor(schematicName: string, collection?: Collection);
    init(): void;
    /**
     * Create file directory, remove comments and add ts files
     */
    createFileDir(testApp: UnitTestTree): void;
    /**
     * Creates or overwrites a file on the disk and in the virtual Tree.
     */
    writeFile(filePath: string, content: string): void;
    /**
     * Deletes file on the disk and in the virtual Tree.
     */
    deleteFile(filePath: string): void;
    /**
     * Syncs the whole virtual tree to the disk.
     */
    syncTreeToFileSystem(appTree: UnitTestTree): void;
    /**
     * Run your migration.
     */
    runMigration(options?: {}): Promise<UnitTestTree>;
    getWorkspaceConfig(): any;
}
