"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installAllPeerDependencies = exports.ndbxVersion = void 0;
const package_config_1 = require("./package-config");
exports.ndbxVersion = loadPackageVersionGracefully('@allianz/ngx-ndbx');
// fetch the version defined in modules
function loadPackageVersionGracefully(packageName) {
    try {
        return require(`${packageName}/package.json`).version;
    }
    catch {
        return null;
    }
}
function installAllPeerDependencies(host) {
    // key/value pair: package name/version
    try {
        const peerDependencies = require(`@allianz/ngx-ndbx/package.json`).peerDependencies;
        for (const packageName in peerDependencies) {
            if ({}.hasOwnProperty.call(peerDependencies, packageName)) {
                (0, package_config_1.addPackageToPackageJson)(host, packageName, peerDependencies[packageName]);
            }
        }
    }
    catch (e) {
        // we reuse ng-add in unit tests. this should never fail when run with the angular cli
        // as the library package will be downloaded before hand.
        console.log('WARNING NGX-NDBX PACKAGE AND PACKAGE.JSON NOT FOUND IS IT RUNNING IN TESTS?');
    }
}
exports.installAllPeerDependencies = installAllPeerDependencies;
//# sourceMappingURL=version-names.js.map