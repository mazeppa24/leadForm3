[<img src="https://img.shields.io/badge/Slack-dev__tools-ff69b4.svg">](https://globaldigitalfactory.slack.com/messages/dev_digital-assets/) [<img src="https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/api/badges/gate?key=ngx-aem-integration">](https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/dashboard?id=ngx-aem-integration) [<img src="https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/api/badges/measure?key=ngx-aem-integration&metric=coverage">](https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/dashboard?id=ngx-aem-integration) [<img src="https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/api/badges/measure?key=ngx-aem-integration&metric=ncloc">](https://sonarqube-adp-tools-gcj.apps.tools.adp.allianz/dashboard?id=ngx-aem-integration)

# 1. NGX-AEM-INTEGRATION

📚 Global NGX-AEM-INTEGRATION for Angular.

If you want to contribute, please read the **[Contribution Guidelines](CONTRIBUTING.md)**.

---

## 1.1. Table of contents

<!-- TOC depthTo:3 -->

- [1. NGX-AEM-INTEGRATION](#1-ngx-aem-integration)
  - [1.1. Table of contents](#11-table-of-contents)
  - [1.2. About NGX-AEM-INTEGRATION](#12-about-ngx-aem-integration)
- [2. Installation](#2-installation)
  - [2.1. Installation of the library](#21-installation-of-the-library)
    - [2.1.1. Major Versions](#211-major-versions)
  - [2.2. Peer Dependencies](#22-peer-dependencies)
- [3. Functionality of the Loader Script](#3-functionality-of-the-loader-script)
  - [3.1. Deploy URL and Build Args](#31-deploy-url-and-build-args)
    - [3.1.1. Automatic Mechanism to Set the Deploy-URL During Runtime](#311-automatic-mechanism-to-set-the-deploy-url-during-runtime)
    - [3.1.2. Usage as build parameter](#312-usage-as-build-parameter)
    - [3.1.3. Custom Build Parameters](#313-custom-build-parameters)
    - [3.1.4. Base Href](#314-base-href)
- [4. Build Setup](#4-build-setup)
  - [4.1. Example](#41-example)
    - [4.1.1 Script Builder](#411-script-builder)
    - [4.1.2 Angular CLI Builder](#412-angular-cli-builder)
  - [4.2. Build Options](#42-build-options)
  - [4.3. Jenkins Setup](#43-jenkins-setup)
  - [4.4. Integration into oneMarketing](#44-integration-into-onemarketing)
  - [4.5. Local Testing of the Integration](#45-local-testing-of-the-integration)
    - [4.5.1. Local Build](#451-local-build)
    - [4.5.2. Test the Integration](#452-test-the-integration)
  - [4.6. Example Scenarios](#46-example-scenarios)
    - [4.6.1. Standalone in the Root](#461-standalone-in-the-root)
    - [4.6.2. Standalone in a Sub-Path](#462-standalone-in-a-sub-path)
    - [4.6.3. Integrated in a Remote Website](#463-integrated-in-a-remote-website)
  - [4.7. Available Angular CLI Builders](#47-available-angular-cli-builders)
    - [4.7.1. Generate JS Loader](#471-generate-js-loader)
    - [4.7.2. Build](#472-build)
    - [4.7.3 Generate Env Args and Clean Env Args](#473-generate-env-args-and-clean-env-args)
- [5. Usage of the NGX-AEM-Integration Services](#5-usage-of-the-ngx-aem-integration-services)
  - [5.1. EmbeddedDataService](#51-embeddeddataservice)
    - [5.1.1. Custom Configuration Model](#511-custom-configuration-model)
    - [5.1.2. Usage of the Configuration](#512-usage-of-the-configuration)
    - [5.1.3. Integration with ngx-translate](#513-integration-with-ngx-translate)
  - [5.2. NormalizeUrlService](#52-normalizeurlservice)
    - [5.2.1. NormalizeUrl Directive](#521-normalizeurl-directive)
- [6. CORS Configuration](#6-cors-configuration)
  - [6.1. Library Building](#61-library-building)
    - [6.1.1. Local build test](#611-local-build-test)
- [7. Local Development of ngx-aem-integration with an App that uses the ngx-aem-integration library](#7-local-development-of-ngx-aem-integration-with-an-app-that-uses-the-ngx-aem-integration-library)
  - [7.1. Tests](#71-tests)
    - [7.1.1. Tests of the Library (Karma & jasmine)](#711-tests-of-the-library-karma--jasmine)
    - [7.1.2. Tests of the Loader Script (ts-jest & jasmine)](#712-tests-of-the-loader-script-ts-jest--jasmine)
    - [7.1.3. Debugging of the Build](#713-debugging-of-the-build)
  - [7.2. Remarks](#72-remarks)
  - [7.3. Troubleshooting](#73-troubleshooting)
  - [7.4. Resources](#74-resources)

<!-- /TOC -->

> ⚠️ The library is currently not compatible with the new esbuild based builders in Angular.
> It only works with the former `@angular-devkit/build-angular:browser` builder.
> See also: https://angular.dev/tools/cli/esbuild

## 1.2. About NGX-AEM-INTEGRATION

This library contains

- An Angular CLI based build script for oneMarketing integration
  - This build will create a loader script, that automatically inserts the app scripts into the oneMarketing page.
- Angular services that support the oneMarketing integration
  - EmbeddedDataService: Provides access to the oneMarketing configuration and environment
  - NormalizeURLService and Directive: Supports the rewriting of URLs for a direct/seamless integration in oneMarketing

# 2. Installation

For the installation, the npm registry endpoint needs to be updated.

[Please follow the documentation in ngx-ndbx on how to setup the npm registry configuration.](https://github.developer.allianz.io/ilt/ngx-ndbx/blob/master/README.md)

## 2.1. Installation of the library

Run the following command to install the latest version:

```shell
npm install --save @allianz/ngx-aem-integration
```

### 2.1.1. Major Versions

There are several major releases available:

| Version | Description              |
| ------- | ------------------------ |
| 1.x     | Angular 5 based version  |
| 6.x     | Angular 6 based version  |
| 7.x     | Angular 7 based version  |
| 8.x     | Angular 8 based version  |
| 9.x     | Angular 9 based version  |
| 10.x    | Angular 10 based version |
| 11.x    | Angular 11 based version |
| 12.x    | Angular 12 based version |
| 13.x    | Angular 13 based version |
| 15.x    | Angular 14 based version |
| 16.x    | Angular 15 based version |
| 18.x    | Angular 16 based version |
| 19.x    | Angular 17 based version |
| 20.x    | Angular 18 based version |

The following command can be used to get a list of all available versions:

```shell
npm show @allianz/ngx-aem-integration@* version
```

Run the following command to install the latest minor version of the major release branch that you want to use:

```shell
npm install @allianz/ngx-aem-integration@"^1.0.0" --save
```

#### Beta Versions

Beta versions are published under the npm next dist-tag.
The following command displays the latest version per tag:

```shell
npm view @allianz/ngx-aem-integration@* dist-tags
```

The following command can be used to install the latest beta version:

```shell
npm install @allianz/ngx-aem-integration@next --save
```

## 2.2. Peer Dependencies

The ngx-aem-integration library requires some peer dependencies to function correctly:

- `@angular-devkit/core`

A full list of dependencies can be seen in the library `package.json`.

npm will automatically mention unavailable peer dependencies during the installation.

`@ngx-translate/core` and `@ngx-translate/http-loader` are optional if the EmbeddedDataService is not used.

# 3. Functionality of the Loader Script

By default, an angular application consists of several different javascript files.
These files have a hash in their filename, which would mean, that the SPA container configuration in oneMarketing would need to be updated after every build.

To circumvent this, the ngx-aem-integration build generates a loader script, which injects the scripts of the application.

This has the following advantages:

- The oneMarketing configuration doesn't need to be updated
- The scripts of the app can be distributed with long term caching headers. Only the loader script needs to have a short caching timeframe
- Cache busting is still available, as the url of the injected scripts (but not the loader script) changes with every build
- The loader script is also able to determine the deploy-url dynamically during runtime

## 3.1. Deploy URL and Build Args

If an app wants to load additional resources during runtime, it needs to use the absolute URL, of the server where it is deployed. Relative URLs will be resolved to the oneMarketing hostname by the browser.

For use cases like this, the Angular CLI provides the `deploy-url` parameter.

The ngx-aem-integration library loader script (index.js) has a mechanism to determine the hostname of the server, where the index.js file is hosted during runtime.
This hostname is automatically used to load all other app files.

That means, in almost all cases, it is not necessary to supply the parameter during build time.

### 3.1.1. Automatic Mechanism to Set the Deploy-URL During Runtime

This automatic mechanism assumes that the loader script is called index.js and that it is the only one with that name on the page.

The determined hostname will also be stored in `document.aemIntegrationAppServerURL`. If that variable is already set, the existing value will be used.
This can be used to override the value during runtime from outside.

The Angular CLI also uses the deploy-url to set the basis for all lazy loaded chunks.
If the parameter is not set during the build, this base also needs to be changed during runtime. Otherwise all lazy loading will fail.

To do this, set the `__webpack_public_path__` in your main.ts like this:

```typescript
// @ts-ignore
__webpack_public_path__ = document.aemIntegrationAppServerURL || '';
```

During build time, this gets rewritten to **webpack_require**.

Warning: This won't cover CSS url() usage! For that the deploy-url during build time needs to be used.

### 3.1.2. Usage as build parameter

If the automatic mechanism isn't suitable, the build parameter can be used.
This parameter has to be set to the hostname (and path), where the application is deployed.

The ngx-aem-integration library contains a mechanism to make the value usable within the app.
During the build, all build cmd parameters are written to the `<root folder>/BUILD_ARGS.ts` file.

It is then possible, to use the parameters within the environment.\*.ts

For example, to use the deploy-url parameter:

```typescript
import { BUILD_ARGS } from '../../BUILD_ARGS';

export const environment = {
  deployUrl: BUILD_ARGS['deploy-url'],
};
```

During the build, the attribute will be replaced with the value from the parameter.

To prevent, changes to the `BUILD_ARGS.ts` file during development. It can be created with the following template:

```typescript
/**
 * DO NOT CHANGE
 * This file will be replaced/regenerated during build to reflect the --deploy-url parameter passed to build script.
 */
export const BUILD_ARGS = {};
```

The build script will then restore the file content after the build.

### 3.1.3. Custom Build Parameters

This mechanism can also be used to set custom parameters in the environment during build time.

Starting with angular cli 6, the cli will fail, if it detects parameters that are unknown to it.

To prevent this, parameters can be prefixed with

```
build-arg-
```

They will then appear in the `BUILD_ARGS.ts` file without that prefix. They will also be remove from the parameters that are forwarded to the angular cli.

#### Example

```
ngx-aem-integration --configuration=myconfig --base-href=my-base-href --deploy-url=https://example.com/my-deploy-url/ --build-arg-custom-parameter=https://example.com/my-custom-parameter
```

### 3.1.4. Base Href

For standalone deployments in a subfolder the base-href parameter of the angular cli can be used.

This will add the base href tag to the generated index.html. This file is not used by the oneMarketing integration, which is why this
is only relevant for standalone deployments.

#### 1.4.1.1.1. Example

If an application is deployed under `https://example.com/app-name/` the base-href parameter should look like this:

```
--base-href=/app-name/
```

The `/` at the end has to be set.

# 4. Build Setup

The main use of the ngx-aem-integration build is use the build script directly from the package json.

Instead of calling the `ng build` the `ngx-aem-integration` script is used.

Since the version 17.X.X though there are special specific builders that covers the different builders that was previously covered inside the scripts builder.

## 4.1. Example

### 4.1.1 Script builder

If the app is currently built with this script:

```json
{
  "scripts": {
    "build": "ng build"
  }
}
```

it needs to be updated to look like this:

```json
{
  "scripts": {
    "build": "ngx-aem-integration build"
  }
}
```

### 4.1.2 Angular CLI Builder

Instead of use the builder from the `scripts` folder you can use the one of the builders directly from the Angular JSON

```JSON
{
   ...,
   "my-project": {
    ...,
    "architect": {
      "build-aem": {
        "builder": "@allianz/ngx-aem-integration:build",
        "options": {
          "buildTarget": "project:target"
        },
        "configurations": {
          "test": {
            "buildTarget": "project:target:test"
          }
        }
      },
      "generate-js-loader": {
        "builder": "@allianz/ngx-aem-integration:generate-js-loader",
        "options": {
          "outputPath": "dist/appname/",
          "index": "index.html"
        }
      }
    }
  }
}
```

## 4.2. Build Options

During the build, the dist directory, where the loader javascript is written to, is automatically determined from the `angular.json` file.

If necessary, the dist target can be overwritten by the angular cli parameters output-path and index. In this case, the configuration in the `angular.json` file is ignored. The config can be either left to be `dist` or removed completely.

### Angular inlineCritical Optimization

Angular 12 activated the `inlineCritical` optimization by default. This optimization cannot be used together with the aem-integration-library and the typical integration scenarios.

The effect of this optimization is, that critical css gets directly inlined into the `index.html` file. As the content of this file is not used in AEM/websites, the css from there would be lost.
Therefore, this optimization needs to be turned off.

There are multiple options on how to do that:

- **Supply a deploy-url during build time** If a deploy-url is supplied, Angular automatically turns off the inlining.
- **Turn the optimization off in the `angular.json`** The optimization can be turned off like this in the `angular.json` `build.options` section:

```
"optimization": {
  "styles": {
    "inlineCritical": false
  }
}
```

This can be done either globally for all builds, or also for a specific configuration/environment.
Usually `optimization` is already present as a boolean value in this location. It can be replaced with the more specific configuration object.

## 4.3. Jenkins Setup

If Jenkins is used for the build, the parameter has to be added to the parameters.

For the GDF Jenkins build pipeline this can be done with the `BUILD_ADDITIONAL_ARGS` parameter.

An example value for this parameter could be: `--deploy-url=https://deployed-app.apps.adp.allianz/`

## 4.4. Integration into oneMarketing

The loader script will be created in the dist folder of the app with the filename `index.js`.

To integrate the app into an AEM page in oneMarketing,

1. add an ["Application Integration (SPA)" component](https://github.developer.allianz.io/oneMarketing/platform-aem-core/blob/master/ui.apps/src/main/content/jcr_root/apps/onemarketing/platform/aem-core/components/content/app-int/README.md) (part of the oneMarketing platform product) to the page, and
2. configure the following parameters for this component:

| Parameter       | Description                                                                                        |
| --------------- | -------------------------------------------------------------------------------------------------- |
| Application Tag | The DOM root tag of the app                                                                        |
| JS URLS         | The deployed URL with the loader script appended. For example: `<deploy-url>/index.js`             |
| Custom Configs  | The key value configurations defined by the app. These will be provided by the EmbeddedDataService |

For example, when testing the [mo-fe](https://github.developer.allianz.io/gcj/mo-fe) integration locally, the correct values are:

- Application Tag: `"mo-root"`
- JS URLS: `"http://localhost:3000/index.js"`
- Custom Configs: none required

## 4.5. Local Testing of the Integration

Follow these steps, to test the integration locally:

### 4.5.1. Local Build

In a local build, the deploy-url parameter can be set like this:
`npm run build -- --configuration=local --deploy-url=http://localhost:3000/`

### 4.5.2. Test the Integration

Change into the dist folder and serve the app locally, for example with the npm local-web-server package:
`ws -p 3000 --cors.credentials`

Now open AEM and add a new SPA container with the `http://localhost:3000` URL.

The integration can now be tested in the page.

#### Testing without AEM

It is also possible to do some basic testing without aem

1. Copy the `index.html` from the dist/viewer folder to another folder
2. Change the html file to load the index.js from the original local webserver
3. Run a local webserver from that folder on another port
4. Open the browser, the app is now loaded from the original server

## 4.6. Example Scenarios

### 4.6.1. Standalone in the Root

App is deployed under:
`http://127.0.0.1:3000/`

Necessary build parameters:

None

### 4.6.2. Standalone in a Sub-Path

App is deployed under:
`http://127.0.0.1:3000/app/`

Necessary build parameters:
`--deploy-url=/app/ --base-href=/app/`

- base-href tells the browser where to load the javascript files from. The app already works with only this parameter.
- deploy-url tells the app where to load the assets from.

### 4.6.3. Integrated in a Remote Website

App is deployed under:

`http://127.0.0.1:3000/`

or any Sub-Path, for example:

`http://127.0.0.1:3000/app/`

Website is deployed under:
`http://127.0.0.1:3001/`

#### Option 1 - Automatic Mode

Necessary build parameters:

none, the deploy-url is determined automatically.

The `__webpack_public_path__` needs to be set for the lazy loading.

#### Option 2 - Manually defined Deploy-URL

Necessary build parameters:
`--deploy-url=http://localhost:3000/`
or:
`--deploy-url=http://localhost:3000/app/`

dependent on the path

## 4.7. Available Angular CLI Builders

### 4.7.1. Generate JS Loader

```json
{
  "builder": "@allianz/ngx-aem-integration:generate-js-loader"
}
```

The `generate-js-loader` generates the `index.js` for an application.
You should execute the `generate-js-loader` AFTER execute the normal ng build command of an application

So first:

```script
ng build your-application --configuration=ENV --deploy-url=YOUR_URL ...
ng generate-js-loader your-application
```

### 4.7.2 Build

```json
{
  "builder": "@allianz/ngx-aem-integration:build",
  "options": {
    "buildTarget": "project:target[:configuration]"
  }
}
```

Sometimes you need to provide certain params that are generated during deploy time (like a deploy url) for those specific cases you can provide
a list of `buildArgs` although you can put that `buildArgs` at `angular.json` level the main purpose is to provide the arguments via `command line`

```script
ng run project:target --build-args=deployUrl=EXAMPLE_ONE --build-args=baseHref=EXAMPLE_TWO
```

Be aware that the build args will be validated by the `buildTarget` build and will cause an issue if the target builder doesn't allow such options

The `build` command will do the target that you provide in the config step for your application and also the `generate-js-loader` step.

### 4.7.3 Generate Env Args and Clean Env Args

```shell
{
  "builder": "@allianz/ngx-aem-integration:generate-env-args",
  "options": {
    "prefix": "NGX_AEM_TEST_",
    "filePath": "path/to/env-args.ts"
  }
}
```

```shell
{
  "builder": "@allianz/ngx-aem-integration:clean-env-args",
  "options": {
    "filePath": "path/to/env-args.ts"
  }
}
```

Although they are 2 different builders the intent is that works together PRE and POST build of the application.

With these builders you can specify a prefix present in the environment, the builder will search in the environment for all the variables that start with that prefix
and will create a file like:

```typescript
export const ENV_ARGS = {
  // Variables here
};
```

The variables will be converted to camelCase removing the prefix, for example:

`NGX_AEM_TEST_MY_EXAMPLE_VARIABLE` will be converted to `myExampleVariable` in the `env-args` file.

# 5. Usage of the NGX-AEM-Integration Services

## 5.1. EmbeddedDataService

The EmbeddedDataService allows access to the oneMarketing configuration values and the environment/context (locale etc...).

To use the service, the EmbeddedDataModule needs to be imported in the app module.

```typescript
imports: [
  EmbeddedDataModule.forRoot({
    rootElementTagName: 'app-root',
    AssetsBasePath: '/assets',
  }),
];
```

The module expects an `EmbeddedDataServiceConfig` in the forRoot function.

This configuration allows it, to customize the configuration source and to set some defaults.

It has one mandatory attribute: The `rootElementTagName`.
This is the name of the main HTML tag of the application, which is also configured in oneMarketing.

It has to be set as a configuration value, as there is no way for the service to determine the main element automatically during startup of the app.

For testing, a `EmbeddedDataMockModule` is also provided.

### 5.1.1. Custom Configuration Model

The EmbeddedDataService has several generics for custom configuration data models:

| Type      | Description                                                                                                                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CAAS_T    | Type, that is used for the oneMarketing CaaS functionality                                                                                                                                                                              |
| CUSTOM_T  | Type for the custom defined configuration values in the oneMarketing app container. By default the CustomConfigurationBase from the ngx-aem-integration library is used. This one can be extended with custom configuration attributes. |
| CONTEXT_T | Type for the context configuration provided by oneMarketing. Usually contains information like the language, country or path. ngy-aem-integration includes a default type named ContextConfigurationBase                                |

### 5.1.2. Usage of the Configuration

After startup of the app, the service and its configuration values are immediately available.

Example usage in another component:

```typescript
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private embeddedDataService: EmbeddedDataService<MyCaaSType, MyCustomConfigurationType>,
  ) {
    translate.use((embeddedDataService.ContextConfiguration && embeddedDataService.ContextConfiguration.language) || 'en');

    const appID = embeddedDataService.CustomConfiguration.applicationId;
    // Usage of the appID
  }
}
```

The extension of the custom configuration type could look like this:

```typescript
export interface AEMConfiguration extends CustomConfigurationBase {
  applicationId: string;
}
```

### 5.1.3. Integration with ngx-translate

The library also contains the `AemTranslateLoader` which implements a ngx-translate TranslateLoader.

This TranslateLoader will automatically reroute the loading of the localization files.

Integration:

```typescript
import { AemTranslateLoader } from '@allianz/ngx-aem-integration/ngx-translate-loader';

imports: [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useExisting: AemTranslateLoader,
    },
    isolate: true,
  }),
];
```

## 5.2. NormalizeUrlService

This service, allows it to rewrite URLs for resources in the application to the deploy-url.

It can be imported like this:

```typescript
imports: [
  NormalizeUrlModule.forRoot({
    provide: NORMALIZE_URL_SERVICE_CONFIG_TOKEN,
    useValue: {
      deployUrl: environment.deployUrl,
    },
  }),
];
```

As a provider is used, to set the configuration DI token, it is also possible to create it with a factory.

The service can then be used in other components like this:

```typescript
constructor(public normalizeUrlService: NormalizeUrlService) {
  this.someURL = this.normalizeUrlService.normalizeUrl(this.someURL);
  // Usage of someURL to call a service/retrieve assets...
}
```

URLs that should be normalized by the service, have to be root relative. For example:
`/assets/files/some/file`

With a deploy-url of `https://example.com/` this URL would then be changed to:
``https://example.com/assets/files/some/file```

### 5.2.1. NormalizeUrl Directive

Besides the service, a `aemNormalizeUrl` directive is also provided. This can be used to normalize URLs directly in the templates.

For example:

```html
<img aemNormalizeUrl src="/assets/images/image.png" />
```

# 6. CORS Configuration

For the integration, the web server hosting the app, also needs to be setup for CORS.

In the case of nginx, an example configuration excerpt for development could look like this.

```
########################################
# If Is Evil:
# https://www.nginx.com/resources/wiki/start/topics/depth/ifisevil/
# How nginx "location if" works:
# http://agentzh.blogspot.com/2011/03/how-nginx-location-if-works.html
########################################
http {
  charset utf-8;
  default_type application/octet-stream;
  include mime.types;
  sendfile on;

  gzip on;
  gzip_disable "msie6";
  gzip_comp_level 6;
  gzip_min_length 1100;
  gzip_buffers 16 8k;
  gzip_proxied any;
  gzip_types text/plain text/css text/js text/xml text/javascript application/javascript application/x-javascript application/json application/xml application/xml+rss;

  tcp_nopush on;
  keepalive_timeout 30;
  port_in_redirect off; # Ensure that redirects don't include the internal container PORT - 8080
  server_tokens off;

  server {
    listen 8080;
    server_name localhost;
    add_header X-Frame-Options "SAMEORIGIN";
    root /home/vcap/app/public;

      location / {

        # No caching for the index.js => Etag validation should be triggered each time
        location ~ (index.js) {
          # empty, add no cache header
        }

        location ~* \.(woff|woff2|eot|js|gz|json)$ {

          # add caching header
          add_header "Cache-Control" "public, max-age=31536000";

          # this will echo back the origin header for allowed TLDs
          if ($http_origin ~* (\/\/localhost:(4200|4502|4503)|\.(adp\.allianz|adobecqms\.net|allianz\.de|allianz\.com|allianz\.be|loj\.systems))$) {
            # add caching header
            add_header "Cache-Control" "public, max-age=31536000";

            add_header "Access-Control-Allow-Origin" $http_origin;
            add_header "Access-Control-Allow-Credentials" "true";
            add_header "Vary" "Origin";
          }
        }

        try_files $uri.html $uri $uri/ /index.html;

        if ($request_method = OPTIONS ) {
          add_header Access-Control-Allow-Origin "127.0.0.1"; # <- needs to be updated
          add_header Access-Control-Allow-Methods "GET, OPTIONS";
          add_header Content-Length 0;
          add_header Content-Type text/plain;
          return 200;
        }
      }
  }
}
```

## 6.1. Library Building

Run the following script to build the viewer application.

```shell
npm run build
```

This will create deployable build in the folder `dist`.

Run the following script to build the library:

```shell
npm run bundle-lib
```

It will create the build in `dist` ready to be published.
This is powered by [ng-packagr](https://github.com/dherges/ng-packagr) which generates the necessary bundles to be consumed by most build systems.

### 6.1.1. Local build test

To test the build result with a local webserver the `test:integration` script can be used:

```shell
npm run test:integration
```

It is also possible to start the webserver manually:

# 7. Local Development of ngx-aem-integration with an App that uses the ngx-aem-integration library

For testing/development of the ngx-aem-integration library it is often helpful to integrate it with a real application locally.

To do this, follow these steps:

- npm -g install-local
- install-local ..\ngx-aem-integration\dist\lib

The gdf/seed_angular repository also contains a branch named aem-build-debugging-setup that includes a testing and debugging setup for the build scripts.

## 7.1. Tests

There is two different test setups.

### 7.1.1. Tests of the Library (Karma & jasmine)

These test cover the Angular part of the library. They can be run with `ng test`.

Use `npm run test:debugging` to debug them.

### 7.1.2. Tests of the Loader Script (ts-jest & jasmine)

These tests cover the loader script.

Use the `Debug Launch Script Tests` configuration to debug them in VSCode.

### 7.1.3. Debugging of the Build

The `Run AEM Build viewer *` configurations can be used to debug the build in VSCode

## 7.2. Remarks

## 7.3. Troubleshooting

## 7.4. Resources
