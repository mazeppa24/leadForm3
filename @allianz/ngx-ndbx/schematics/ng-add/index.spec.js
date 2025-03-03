"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const utility_1 = require("@schematics/angular/utility");
const test_setup_1 = require("../utils/testing/test-setup");
describe('NDBX ng add in module based app', () => {
    const testSetup = new test_setup_1.SchematicTestSetup('ng-add-setup-project', test_setup_1.Collection.SCHEMATICS);
    let testProjectConfig;
    async function getTestProjectConfig() {
        const workspace = await (0, utility_1.readWorkspace)(testSetup.appTree);
        return (0, schematics_1.getProjectFromWorkspace)(workspace, testSetup.appTreeName);
    }
    describe('general and ndbx', () => {
        beforeEach(async () => {
            await testSetup.runMigration({ project: testSetup.appTreeName });
            testProjectConfig = await getTestProjectConfig();
        });
        it('should add ndbx-base.css', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/ndbx-base.css');
        });
        it('should add ndbx theme', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/themes/ndbx.css');
        });
        it('should add NdbxIconModule', async () => {
            expect(testSetup.appTree.readContent(`projects/${testSetup.appTreeName}/src/app/app.module.ts`)).toContain('NdbxIconModule');
        });
        it('should add branded favicon', async () => {
            var _a, _b, _c;
            expect(testSetup.appTree.exists(`projects/${testSetup.appTreeName}/src/favicon.ico`))
                .withContext('favicon.ico file')
                .toBeTrue();
            expect(testSetup.appTree.exists(`projects/${testSetup.appTreeName}/src/favicon.svg`))
                .withContext('favicon.svg file')
                .toBeTrue();
            expect(testSetup.appTree.exists(`projects/${testSetup.appTreeName}/src/apple-touch-icon.png`))
                .withContext('apple-touch-icon.png file')
                .toBeTrue();
            expect(testSetup.appTree.exists(`projects/${testSetup.appTreeName}/src/icon-192.png`))
                .withContext('icon-192.png file')
                .toBeTrue();
            expect(testSetup.appTree.exists(`projects/${testSetup.appTreeName}/src/icon-512.png`))
                .withContext('icon-512.png file')
                .toBeTrue();
            const indexHtml = testSetup.appTree.readContent(`projects/${testSetup.appTreeName}/src/index.html`);
            expect(indexHtml.includes('<link rel="icon" href="/favicon.ico" sizes="any">')).withContext('favicon.ico link').toBeTrue();
            expect(indexHtml.includes('<link rel="icon" href="/favicon.svg" type="image/svg+xml">')).withContext('favicon.svg link').toBeTrue();
            expect(indexHtml.includes('<link rel="apple-touch-icon" href="/apple-touch-icon.png">')).withContext('apple-touch-icon.png link').toBeTrue();
            expect(indexHtml.includes('<link rel="manifest" href="/manifest.webmanifest">')).withContext('manifest link').toBeTrue();
            const config = testSetup.getWorkspaceConfig();
            const project = config.projects[testSetup.appTreeName];
            expect((_c = (_b = (_a = project.architect) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.assets).toContain(`projects/${testSetup.appTreeName}/src/manifest.webmanifest`);
        });
    });
    describe('expert', () => {
        beforeEach(async () => {
            await testSetup.runMigration({ project: testSetup.appTreeName, type: 'b2b' });
            testProjectConfig = await getTestProjectConfig();
        });
        it('should add expert theme', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/themes/ndbx-expert.css');
        });
    });
});
describe('NDBX ng add in standalone based app', () => {
    const testSetup = new test_setup_1.SchematicTestSetup('ng-add-setup-project', test_setup_1.Collection.SCHEMATICS);
    let testProjectConfig;
    async function getTestProjectConfig() {
        const workspace = await (0, utility_1.readWorkspace)(testSetup.appTreeStandalone);
        return (0, schematics_1.getProjectFromWorkspace)(workspace, testSetup.appTreeNameStandalone);
    }
    describe('general and ndbx (standalone)', () => {
        beforeEach(async () => {
            await testSetup.runMigration({ project: testSetup.appTreeNameStandalone });
            testProjectConfig = await getTestProjectConfig();
        });
        it('should add ndbx-base.css (standalone)', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/ndbx-base.css');
        });
        it('should add ndbx theme (standalone)', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/themes/ndbx.css');
        });
        it('should add NdbxIconModule (standalone)', async () => {
            expect(testSetup.appTreeStandalone.readContent(`projects/${testSetup.appTreeNameStandalone}/src/app/app.config.ts`)).toContain('provideNdbxIcons');
        });
        it('should add branded favicon (standalone)', async () => {
            var _a, _b, _c;
            expect(testSetup.appTreeStandalone.exists(`projects/${testSetup.appTreeNameStandalone}/src/favicon.ico`))
                .withContext('favicon.ico file')
                .toBeTrue();
            expect(testSetup.appTreeStandalone.exists(`projects/${testSetup.appTreeNameStandalone}/src/favicon.svg`))
                .withContext('favicon.svg file')
                .toBeTrue();
            expect(testSetup.appTreeStandalone.exists(`projects/${testSetup.appTreeNameStandalone}/src/apple-touch-icon.png`))
                .withContext('apple-touch-icon.png file')
                .toBeTrue();
            expect(testSetup.appTreeStandalone.exists(`projects/${testSetup.appTreeNameStandalone}/src/icon-192.png`))
                .withContext('icon-192.png file')
                .toBeTrue();
            expect(testSetup.appTreeStandalone.exists(`projects/${testSetup.appTreeNameStandalone}/src/icon-512.png`))
                .withContext('icon-512.png file')
                .toBeTrue();
            const indexHtml = testSetup.appTreeStandalone.readContent(`projects/${testSetup.appTreeNameStandalone}/src/index.html`);
            expect(indexHtml.includes('<link rel="icon" href="/favicon.ico" sizes="any">')).withContext('favicon.ico link').toBeTrue();
            expect(indexHtml.includes('<link rel="icon" href="/favicon.svg" type="image/svg+xml">')).withContext('favicon.svg link').toBeTrue();
            expect(indexHtml.includes('<link rel="apple-touch-icon" href="/apple-touch-icon.png">')).withContext('apple-touch-icon.png link').toBeTrue();
            expect(indexHtml.includes('<link rel="manifest" href="/manifest.webmanifest">')).withContext('manifest link').toBeTrue();
            const config = testSetup.getWorkspaceConfig();
            const project = config.projects[testSetup.appTreeNameStandalone];
            expect((_c = (_b = (_a = project.architect) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.assets).toContain(`projects/${testSetup.appTreeNameStandalone}/src/manifest.webmanifest`);
        });
    });
    describe('expert (standalone)', () => {
        beforeEach(async () => {
            await testSetup.runMigration({ project: testSetup.appTreeNameStandalone, type: 'b2b' });
            testProjectConfig = await getTestProjectConfig();
        });
        it('should add expert theme (standalone)', async () => {
            expect(testProjectConfig.targets.get('build').options.styles).toContain('node_modules/@allianz/ngx-ndbx/css/themes/ndbx-expert.css');
        });
    });
});
//# sourceMappingURL=index.spec.js.map