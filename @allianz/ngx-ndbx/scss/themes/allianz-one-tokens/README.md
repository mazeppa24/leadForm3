# Allianz Design Tokens

This project is the single source of truth for the technical provisioning of all design tokens of the Allianz Group. The goal of this repository is to provide an easy as possible usable description format for each platform and brand of the Allianz Group.

## Table of Contents

-   [Official Design System Documentation](#official-documentation)
-   [Setups](#npm)
    -   [NPM](#npm)
        -   [Global Digital Factory Sonatype Nexus Package Registry](#global-digital-factory-sonatype-nexus-package-registry)
        -   [One Marketing jFrog Artifactory Package Registry](#one-marketing-jfrog-artifactory-package-registry)
        -   [Install the Package](#install-the-package)
        -   [Platforms & File Formats](#platforms--file-formats)
    -   [CDN](#cdn)
        -   [Specific Version](#specific-version)
        -   [Platforms & File Formats](#platforms--file-formats-1)
-   [Implementation](#implementation)
    -   [Integration Scenarios](#integration-scenarios)
        -   [Build Time Integration](#build-time-integration)
        -   [Run Time Integration](#run-time-integration)
-   [Background Informations](#background-informations)
    -   [Design Decisions](#design-decisions)
    -   [Design System Feature Overview](#design-system-feature-overview)
    -   [Technical Decisions](#technical-decisions)
    -   [Allianz Brands and Original Entities](#allianz-brands-and-original-entities-oes)

## Official Design System Documentation

Under the official brand guidelines in the future also the documentation for the One Allianz design system, together with the detailled documentation of the design tokens will be placed: [One Allianz Brand Guidelines](https://one.allianz.com/)

### Advanced Notice

**Currently the design adjustments for sub brands like AGI or Allianz Direct are not available yet. Further it is worth mentioning, that we currently concentrate on providing the One Allianz design tokens in the different web formats. Therefore the generated tokens for the platforms Android, iOS and for tools like Figma (as a token consumer) are not yet actively developed and maintained. Therefore only rely on the tokens provided in the different web formats.**

## NPM

#### Prerequisites

There are currently two package registries available to get the `@allianz/a1-design-tokens` NPM package from. The GDF's Sonatype Nexus packages registry and the One Marketing jFrog Artifactory package registry. Depending on where your project is located and related to, either one of them might be easier to setup and reach. In the following the setup for each package registry is explained respectively, **but you will only need one of them**.

### Global Digital Factory Sonatype Nexus Package Registry

If you might have already a `.npmrc` configuration for the `@allianz/ngx-ndbx` Angular NDBX package, you should be already setup for the GDF Nexus and can directly jump to the section [Install the Package](https://github.developer.allianz.io/a1/design-tokens/blob/main/token-package/README.md#install-the-package). If not please follow the beneath description for setting up the `.npmrc` configuration for the GDF Nexus package registry, like it is [also described in the Angular NDBX package](https://github.developer.allianz.io/ilt/ngx-ndbx#installation).

#### Access Token

Exactly like written in [the original guides by GDF](https://github.developer.allianz.io/gdf/overflow/issues/10) for setting up a `.npmrc` for local development, please follow these steps:

1. First add the Nexus as the package registry for `@allianz` scoped NPM packages in your local terminal:
    ```bash
    npm config set @allianz:registry "https://nexus-frontend.frameworks.allianz.io/repository/npm-public/"
    ```
2. Setting up the proxy `https_proxy="http://th000-surf.zone3.proxy.allianz:8080/"` mentioned in [the GDF guides](https://github.developer.allianz.io/gdf/overflow/issues/10), is not necessary and can most likely be skipped.
3. Then login to the Nexus package registry with
    ```bash
    npm login --registry https://nexus-frontend.frameworks.allianz.io/repository/npm-public/
    ```
    If asked in the upcoming prompt, add your **BENSL** as the username, your **AVC Windows password** as the password and your **Allianz email** address as the email.
4. Investigate what has been added to your local user `.npmrc` file. It should look like the following:
    ```text
    //nexus-frontend.frameworks.allianz.io/repository/npm-public/:_authToken=<NpmToken.WITH_SOME_LONGER_KEY>
    ```
    `<NpmToken.WITH_SOME_LONGER_KEY>` is a placeholder for your personal Nexus authentication token. **Keep in mind to never ever commit access tokens, auth tokens, passwords etc.!**

#### NPM Settings

1.  Finally the necessary NPM settings in your local user `.npmrc` file should look like this:
    ```text
    @allianz:registry=https://nexus-frontend.frameworks.allianz.io/repository/npm-public/
    //nexus-frontend.frameworks.allianz.io/repository/npm-public/:_authToken=<NpmToken.WITH_SOME_LONGER_KEY>
    ```
2.  If you are using a CI/CD pipeline you need to provide the `authToken` as a Github Action Secret or hidden parameter within Jenkins. Then during your CI/CD run, configure the pipline runners `.npmrc` file with the following npm config commands:
    ```bash
    npm config set @allianz:registry https://nexus-frontend.frameworks.allianz.io/repository/npm-public/
    npm config set //nexus-frontend.frameworks.allianz.io/repository/npm-public/:_authToken ${{NEXUS_AUTH_TOKEN}}
    ```
    Obviously in the above example the Github Action Secret or Jenkins hidden parameter name is `NEXUS_AUTH_TOKEN` and should have the value of the generated `authToken` seen in the previous step.

### One Marketing jFrog Artifactory Package Registry

#### Access Token

Via the Allianz Virtual Client (AVC) or an AMC Mac go to the [jFrog Artifactory](https://diartifactory.jfrog.io/ui/login/). Then use the button **di-selfservice** beneath the login form. You will be redirected to an [Allianz Collaboration login page](https://login.collaboration.allianz.io/auth/realms/ptc/protocol/openid-connect/auth?client_id=nexus&scope=openid%20profile%20email&redirect_uri=https://diartifactory.jfrog.io/artifactory/api/oauth2/loginResponse&state=-5038515227226468818~~~~https%3A%2F%2Fdiartifactory.jfrog.io&response_type=code&approval_prompt=auto). There you again click on the button **Allianz Certificate** beneath the login form. After the login to the Artifactory you click in the top right on your user settings drop down menu and chose ['Edit Profile'](https://diartifactory.jfrog.io/ui/user_profile). Under **Authentication Settings** you can **Generate an Identity Token** which is valid for **_8hrs_**. **Keep in mind to never ever commit access tokens, auth tokens, passwords etc.!**

Further informations:

-   https://self-service.collaboration.allianz.io/main/faq
-   https://allianz-apac-prd.adobecqms.net/content/dam/onemarketing/ops/selfservice-FAQ.pdf

#### NPM Settings

In your local user `.npmrc` file add the following registry configurations:

```text
@allianz:registry=https://diartifactory.jfrog.io/artifactory/api/npm/npm-all/
//diartifactory.jfrog.io:_authToken=<YOUR_GENERATED_8HRS_TOKEN>
```

Replace `<YOUR_GENERATED_8HRS_TOKEN>` with your generated Identity Token from the Artifactory settings.

In case you need to setup a CI/CD pipeline, better try to use the GDF Nexus packages registry, as their `authToken` is not limited to 8 hours. In case you need CI/CD necessarily with the One Marketing Artifactory, please contact the One Marketing DevOps team, as the 8h `authToken` obviously does not suite the requirements of an automatic build pipeline.

### Install the Package

After setting up all NPM configurations, simply install it with the usual npm command:

```bash
npm i -D @allianz/a1-design-tokens
```

### Platforms & File Formats

The following listing is an exemplary overview of the available token files in the `dist` folder of the NPM package. The listing below shows which token files for each platform can be expected in the future. This means that **you please only rely on the tokens under `token-package/dist/allianz/web` for now**.

```text
dist
 └─> allianz
     ├─> android
     │   ├── tokens-dense-dark-lively.xml
     │   ├── tokens-dense-dark-minimal.xml
     │   ├── tokens-dense-light-lively.xml
     │   ├── tokens-dense-light-minimal.xml
     │   ├── tokens-spacious-dark-lively.xml
     │   ├── tokens-spacious-dark-minimal.xml
     │   ├── tokens-spacious-light-lively.xml
     │   └── tokens-spacious-light-minimal.xml
     ├─> ios
     │   ├── tokens-dense-dark-lively.h
     │   ├── tokens-dense-dark-minimal.h
     │   ├── tokens-dense-light-lively.h
     │   ├── tokens-dense-light-minimal.h
     │   ├── tokens-spacious-dark-lively.h
     │   ├── tokens-spacious-dark-minimal.h
     │   ├── tokens-spacious-light-lively.h
     │   └── tokens-spacious-light-minimal.h
     ├─> tools
     │   ├── tokens-dense-dark-lively-figma.json
     │   ├── tokens-dense-dark-minimal-figma.json
     │   ├── tokens-dense-light-lively-figma.json
     │   ├── tokens-dense-light-minimal-figma.json
     │   ├── tokens-spacious-dark-lively-figma.json
     │   ├── tokens-spacious-dark-minimal-figma.json
     │   ├── tokens-spacious-light-lively-figma.json
     │   └── tokens-spacious-light-minimal-figma.json
     └─> web
         ├── tokens-dense-dark-lively.css
         ├── tokens-dense-dark-lively.js
         ├── tokens-dense-dark-lively.json
         ├── tokens-dense-dark-lively.scss
         ├── tokens-dense-dark-minimal.css
         ├── tokens-dense-dark-minimal.js
         ├── tokens-dense-dark-minimal.json
         ├── tokens-dense-dark-minimal.scss
         ├── tokens-dense-light-lively.css
         ├── tokens-dense-light-lively.js
         ├── tokens-dense-light-lively.json
         ├── tokens-dense-light-lively.scss
         ├── tokens-dense-light-minimal.css
         ├── tokens-dense-light-minimal.js
         ├── tokens-dense-light-minimal.json
         ├── tokens-dense-light-minimal.scss
         ├── tokens-spacious-dark-lively.css
         ├── tokens-spacious-dark-lively.js
         ├── tokens-spacious-dark-lively.json
         ├── tokens-spacious-dark-lively.scss
         ├── tokens-spacious-dark-minimal.css
         ├── tokens-spacious-dark-minimal.js
         ├── tokens-spacious-dark-minimal.json
         ├── tokens-spacious-dark-minimal.scss
         ├── tokens-spacious-light-lively.css
         ├── tokens-spacious-light-lively.js
         ├── tokens-spacious-light-lively.json
         ├── tokens-spacious-light-lively.scss
         ├── tokens-spacious-light-minimal.css
         ├── tokens-spacious-light-minimal.js
         ├── tokens-spacious-light-minimal.json
         └── tokens-spacious-light-minimal.scss
```

## CDN

We are planning to use the Cloudflare CDN procured by OneMarketing. Specifically we have choosen a R2 bucket, which is an S3-compatible object storage that serves the static token assets via the Cloudflare CDN. Due to the unavailability of the R2 Bucket feature in One Marketing's current Cloudflare license, a KXL test R2 bucket is temporarily employed. **So please be aware that the CDN URLs probably will change in the near future to their final host URL:** `https://design-tokens.cdn.allianz.com/`

### Specific Version

The link to a token file is build up like the following:

```text
https://a1-cdn.kxlabs.net/<TOKEN_PACKAGE_VERSION>/<PATH_TO_THE_TOKEN_FILE>
```

so for example for the version 0.4.1 the link looks like that:

```text
https://a1-cdn.kxlabs.net/0.4.1/allianz/web/tokens-spacious-light-lively.0.4.1.css
```

### Platforms & File Formats

The following listing is an exemplary overview of the available token files in the `cdn` folder of the token package. The listing below shows which token files for each platform can be expected in the future. This means that **you please only rely on the tokens under `token-package/cdn/tokens/<TOKEN_PACKAGE_VERSION>/allianz/web` for now**.

```text
cdn
 └─> tokens
     └─> <TOKEN_PACKAGE_VERSION>
         └─> allianz
             ├─> android
             │   ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.xml
             │   ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.xml
             │   └── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.xml
             ├─> ios
             │   ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.h
             │   ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.h
             │   └── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.h
             ├─> tools
             │   ├── tokens-dense-dark-lively-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-dense-dark-minimal-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-dense-light-lively-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-dense-light-minimal-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-spacious-dark-lively-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-spacious-dark-minimal-figma.<TOKEN_PACKAGE_VERSION>.json
             │   ├── tokens-spacious-light-lively-figma.<TOKEN_PACKAGE_VERSION>.json
             │   └── tokens-spacious-light-minimal-figma.<TOKEN_PACKAGE_VERSION>.json
             └─> web
                 ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-dense-dark-lively.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-dense-dark-minimal.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-dense-light-lively.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-dense-light-minimal.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-spacious-dark-lively.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-spacious-dark-minimal.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.json
                 ├── tokens-spacious-light-lively.<TOKEN_PACKAGE_VERSION>.scss
                 ├── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.css
                 ├── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.js
                 ├── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.json
                 └── tokens-spacious-light-minimal.<TOKEN_PACKAGE_VERSION>.scss
```

#### Format Considerations

Besides the consideration regarding integrating the design tokens during build- and run-time, there are also other technical considerations, which are important when choosing the right design token format for your web project.

-   CSS
    -   _Pros_: Can be used across Shadow DOM boundaries during run-time
    -   _Cons_: Are not tree-shakable
-   SCSS
    -   _Pros_: Tree-shakable
    -   _Cons_: No overriding during run-time
-   JS
    -   _Pros_: Tree-shakable; Can be used across Shadow DOM boundaries
    -   _Cons_: Performance Overhead, Debugging, Separation of Concerns
-   JSON
    -   _Pros_: Can be used across Shadow DOM boundaries
    -   _Cons_: Performance Overhead, Debugging, Separation of Concerns

## Implementation

### Integration Scenarios

In the realm of application development, the integration of design tokens can be approached in two primary ways: during build time or run-time. Each method carries its distinct advantages and limitations.

Build-time integration is known for its efficiency and performance benefits. By embedding design tokens directly into the application during the build process, we can ensure a seamless user experience with faster load times. However, this method can be less flexible, as any changes to design tokens necessitate a new build and deployment cycle.

On the other hand, run-time integration offers a high degree of flexibility, allowing for design tokens to be altered and applied dynamically without the need for recompiling the application. This can be particularly useful for theming or enabling real-time customization. The trade-off, however, is often a potential impact on performance, as these changes are processed during the application's execution.

We as the Allianz Studio design system team recognize the importance of both methods and the value they bring to our development process. Our goal for the future is to explore and provide integration scenarios that harness the best of both worlds—combining the speed and reliability of build-time integration with the adaptability of run-time integration. By doing so, we aim to minimize the downsides of each approach.

As we move forward, we are committed to enhancing our integration strategies to offer a more robust, efficient, and flexible development environment. This will enable us to adapt to changing design requirements swiftly while maintaining high performance and user experience standards.

#### Build Time Integration

For example at the top of your `_variables.scss` file in your general style in your project, import the Allianz default theme like the following, assuming you [installed the design tokens via NPM](https://github.developer.allianz.io/a1/design-tokens/blob/main/token-package/README.md#install-the-package):

```SCSS
@import 'node_modules/@allianz/a1-design-tokens/dist/allianz/web/tokens-spacious-light-lively.scss';
```

##### Considerations

###### _Pros_

-   **Performance:** Design tokens as SCSS variables are tree-shakable during build time and can optimize bundle sizes and therefore load times.
-   **Safety:** Ensures during compile time that you do not make use of unsupported design tokens in your code. Maybe caused by misspellings or because a design token name changed. This is especially helpful, if you want to easily migrate to newer design token major versions in the future. There are some helpful browser extensions like [CSS Undefined Variable Checker](https://chromewebstore.google.com/detail/css-undefined-variable-ch/endbpplgeglmgihkpiapmaimegpkhhcn), but unfortunately they can't guarantee to catch all undefined CSS variables across all different states (hover, active, focus, etc.) of a HTML element can have styles defined for. So the most reliable integrations is during build time, like i.e. with SCSS.

###### _Cons_

-   **Debugging:** Currently we have not combined CSS variables into the design tokens provided as SCSS variables. Therefore you won't see the respective design token that was used in production of your application, for example in a browser inspector. During development though you can and should have a proper source mapping in place, with which you can inspect your SCSS source files in the browser, as well.
-   **Dynamic:** In order to support dynamic theming, like a user switching to the dark theme during run-time, additional logic and a mapping to the CSS variables of the design tokens still needs to be done.

#### Run Time Integration

For example in the `<head>` of you website add the following link tag of the Allianz default theme like the following:

```HTML
<link href="https://a1-cdn.kxlabs.net/0.4.1/allianz/web/tokens-spacious-light-lively.0.4.1.css" rel="stylesheet" type="text/css" />
```

##### Considerations

###### _Pros_

-   **Dynamic:** Allows styles to be applied based on run-time conditions, like a user switching to the dark theme.
-   **Debugging:** Prodction applications can be inspected for the actual design tokens that are used.

###### _Cons_

-   **Performance:** You will always load all tokens, but normally only a percentage of these tokens are actually needed.
-   **Complexity:** Increases codebase complexity due to run-time styling handling, in which the correct themes have to be loaded on demand.
-   **Maintainability:** Regarding the ability of the application to be future-proof for major design token updates, it will be harder to migrate to newer design token major versions, because it can't be guaranteed, that all of your tokens are still correct. There are some helpful browser extensions like [CSS Undefined Variable Checker](https://chromewebstore.google.com/detail/css-undefined-variable-ch/endbpplgeglmgihkpiapmaimegpkhhcn), but unfortunately they can't guarantee to catch all undefined CSS variables across all different states (hover, active, focus, etc.) of a HTML element can have styles defined for. So the most reliable integrations is during build time, like i.e. with SCSS.

### Token Usage

An examplary first [demo usage and integration of the design tokens](`../pocs/demos/`) as CSS variables in a HTML static website can be found under `../pocs/demos/` and `../pocs/demos/motion`. Just drag'n'drop the preferred demo file into your browser and inspect the styles.

## Background Informations

### Design Token Standard

There are several companies that produce design related products. All of them try to solve the problem of standardise Design Tokens. To find the best solution for the digital design and development industry they formed a community around the topic in July 2019. Among the companies you find names like Google (Material Design), Framer, Marvel, Zeroheight, Figma, Sketch, Adobe (XD), InVision, Interplay, Knapsack, Arcade, UXPin, Axure, Modulz, Abstract, Zeplin etc. All of them agreed upon the fact that it is hard to find a general approach where every vendor will align to. But they are willing to working on it. We as Allianz will stick to what was decided there to ensure a high level of reusability.

-   [W3C Design Tokens](https://www.w3.org/community/design-tokens/)
-   [W3C Design Tokens - Working Draft](https://design-tokens.github.io/community-group/format/)

### Design Decisions

Please be aware that the design tokens administered here describe the technically mapped design decisions of the Allianz. For all design tokens, there are explanatory and more detailed descriptions of the intended use. In some cases, it may be useful to use these descriptions as a basis for decision-making in order to clarify possible questions. In doubt, please contact the the Design System Team within the Allianz Studio.

Find more information here: [One Allianz Brand Guidelines](https://one.allianz.com/)

### Design System Feature Overview

-   Accessible by Design
-   Micro Animations as first-class citizens
-   Platform-Agnostic
-   E2E Technical Integration with Design Tokens
-   UI Densities instead of Retail/Expert
-   Responsive & Mobile First
-   Multi-Dimensional Theming Support

### Technical Decisions

Allianz products and services build upon a broad and heterogeneous technology landscape. This repository is therefore the single source of truth for different kind of platforms, tools and Alllianz brands. The goal is to provide an as simple as possible solution for every consuming party.

-   All descriptions and assets are directly accessible via URL (not a bug, it's a feature).
-   All files contain a versioning information in the header comment and additionally in the file name for the CDN distribution.
-   Obsolete or incorrect release files are not deleted. If there are problems, we will inform you via all channels and will provide a correction with the next release.

### Allianz Brands and Operational Entities (OEs)

The following list is only an example of the brands and OEs that in the future could be found within this project.

-   Allianz
-   Allianz Direct
-   Allianz Care
-   Allianz Travel
-   Allianz Global Investors
-   Allianz Partners
-   Allianz Global Corporate & Specialty
-   Pacific Investment Management Company
-   Euler Hermes

### Keep Informed

Updates and announcements will be communicated directly by the Allianz Studio. Apart from purely technical changes, we implicitly ask you to use the official Allianz Studio channels (e-mail, newsletter, Microsoft Teams) for announcements and voting.

Find more information here under [One Allianz Brand Guidelines](https://one.allianz.com/). If you have questions feel free to reach out to use via [our Allianz Teams channel](https://teams.microsoft.com/l/team/19%3aExOsuBe8zknc18D-HRrDFdSM1WHXyvPmWDH9HFc_uCw1%40thread.tacv2/conversations?groupId=84dc364c-f66f-4602-81b9-184f4c3f1828&tenantId=6e06e42d-6925-47c6-b9e7-9581c7ca302a).

## License

[Copyright (c) 2024 Allianz SE](LICENSE)
