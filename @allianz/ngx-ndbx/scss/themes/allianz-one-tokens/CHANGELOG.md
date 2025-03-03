# Token Changelog

All changes to the single source of truth (SSOT) One Allianz design token set will be documented in this file. For changes of the token builder (@allianz/a1-design-token-builder) a changelog can be found [here](https://github.developer.allianz.io/a1/design-tokens/blob/main/CHANGELOG.md).

## [0.5.0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.4.1...tokens-v0.5.0) (2024-07-03)

### ⚠ BREAKING CHANGES

-   **tile:** Remove wrong leftover motion test tokens for the dense tile component
-   **semantic:** Fix set of semantic static spacings
-   **core:** Rename core.grid.margin to core.grid.inset tokens [A1-788]
-   **core:** Rename core.grid.gutter to core.grid.column-gap tokens [A1-788]

### Bug Fixes

-   **callout:** Remove dense callout gap to meet 24px icon interaction boundary ([8497fc9](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/8497fc94dba1a8c1db376bd823b17160ae512993))
-   **core:** changed grid max-width type from spacing to sizing ([4a30441](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/4a304419fc4b03d8de5d800fa0a3c56675d06613))
-   **core:** Rename core.grid.gutter to core.grid.column-gap tokens [A1-788] ([820f319](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/820f319b810d2d4a9e488dba76f373c50272105f))
-   **core:** Rename core.grid.margin to core.grid.inset tokens [A1-788] ([98269cd](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/98269cd302e45baa016ba2dd80b3c72c4f40eb6b))
-   Semantic compositional token resolution for dense mode [A1-791] ([b2e2a2b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/b2e2a2b85d6718ba62d6135f77955b03950c5d09))
-   **semantic:** Fix set of semantic static spacings ([86d24ee](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/86d24eea3ce5bfdf5e1cc6f78d47a6bbf6121b9b))
-   **tag:** Adjust selectable spacious inset ([2485c1d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2485c1da683030be58cfa3446eb02aa629161fa4))
-   **tile:** Remove wrong leftover motion test tokens for the dense tile component ([895d32e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/895d32e5e9fbe2aa611d812cb84ded8d67c1b920))

### Documentation

-   **demo:** Changing demo headline to demo typography and add more typo examples ([dbfe627](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/dbfe62739592b5067aec6431402e7a216a35d333))
-   **demo:** Fix checkbox read-only and disabled unchecked checkbox sizes ([a8b2528](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/a8b25287c6dbc5c4c81dba24f11c08274873f3d2))
-   **demo:** Fix radio-button motion tokens to tokens-v.0.4.1 ([d08e9c1](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d08e9c10be76d999be47506c4e93ce0245958f97))
-   **demo:** Refactor accordion demo logarithimic calculation ([507231b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/507231b52c85e6e25140423208a949bb463b8c86))
-   **readme:** Add table of content and integration scenarios to README [A1-725] ([9b90aa3](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/9b90aa3f4d33bd21ce0d0e6546c462255f9632ef))

### [0.4.1](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.4.0...tokens-v0.4.1) (2024-03-20)

### Bug Fixes

-   **semantic:** Fix surface hover color for light color-scheme ([c560807](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c560807bf2ed6434858babd544eed93631c17504))

### Documentation

-   **demo:** Fix version bump CDN file version in all demo files to v0.4.1 ([74a4e0f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/74a4e0f4685abff126e1f983623517e58f116fef))

## [0.4.0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.3.0...tokens-v0.4.0) (2024-03-20)

### ⚠ BREAKING CHANGES

-   **button:** Delete ripple related motion tokens
-   **motion:** Order of fast duration token and renaming of still to none
-   **motion:** Rename motion resting tokens to default
-   **tag:** Reworked Tag component naming, structure, colors and spacing

### Features

-   Added Button Plain Secondary Inverse ([d06dd52](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d06dd52be9e81e36fd7ff8ef8c58d932567800e9))
-   Added secondary inverse link for consistency ([2dc785d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2dc785dc921cbefbf7b52edf315f76c8b20b84e8))
-   changed Accordion border color based on Sebastians feedback ([b458ecf](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/b458ecfd885daa47cf121647f79bc88a57dd913e))
-   **indicator:** Add count vertical paddings and add indicator border width ([1e3adea](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/1e3adea6a48c71eb4d725541501d722ba31e516c))
-   **motion:** Added a new easing curve for ripple ([db0139d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/db0139d1af1892aea518d2bf44d89094a8d5dab0))
-   Moved "-EXPERIMENTAL" transparent surface token to surface tokens ([2c1ee91](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2c1ee9185ddd91586e6178d4ea2bb7887cd72462))
-   **tag:** Reworked Tag component naming, structure, colors and spacing ([78f1221](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/78f1221bfdd63189517390a8430210efc856ccda))

### Bug Fixes

-   **accordion:** Fix log calculation for SASS compiler [A1-735] ([#95](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/95)) ([7b179ea](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/7b179eaad416413001342ed6d1fce32942c8500e)), closes [#94](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/94)
-   Add missing description field to normalized custom compositional tokens [A1-734](<[#96](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/96)>) ([c7284f2](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c7284f2b31d0e8fd893808394e997c40e082cb86))
-   **button:** Delete ripple related motion tokens ([6bd1b80](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6bd1b807c282d9720d9df248bc3870cd0d333f11))
-   Changed core grid gutter & margin token type from sizing to spacing ([6799887](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6799887e3705e40c4fa0e565512cb7283abf8916))
-   **figma:** Created new style set for cleanup of library ([653d379](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/653d379f146350dfd3543767ae3be7e1ed99e566))
-   **motion:** Adjusted some button duration and easing curve of ripple and button ([5a46c2f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/5a46c2f39ce5b16e27379ca74cb7931d5856dadc))
-   **motion:** Order of fast duration token and renaming of still to none ([ae3158c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/ae3158c6ca058b857ee40871c38752987e7e9301))
-   **motion:** Rename motion resting tokens to default ([8a38133](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/8a3813368c17d908946c0b2d60055a432debf762))
-   **motion:** Update Button contained motion tokens ([54895b0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/54895b01991ee35a5701cd86cee2d06926bbd2c2))
-   **motion:** Updating animation timing of interaction color fadings ([80f4575](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/80f4575d820c1322aba64b5e0c2ea4f1c8de20cf))
-   Secondary on action inverse color value changed ([04fff7b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/04fff7b7d8ec2b10470ae5e6c0552936c5d1f4b7))
-   **semantic:** Changed light subtle info aqua color to blue ([4a0dc32](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/4a0dc32088806f100723c2582e3180ae488368f4))
-   **tag:** Update Tag component dense spacing ([ceb457c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/ceb457c2ea9ef22ec60fdd1783019cb69b8f66e0))

### Documentation

-   **core:** Adding descriptions to the core grid gutter, margins and max-width tokens ([eb09caf](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/eb09caf8d2ecdfbdfd7b0325f777d8a40aefc666))
-   **demo:** Cluster and refactor all accordion header styles ([43f02ba](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/43f02ba99abd7d6a63720ec4365642e3c1d68365))
-   **demo:** Delete old obsolete button token integration demo ([a4b6a45](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/a4b6a4553f1da0373568453f2cbd7acf5fa6a17d))
-   **demo:** Delete ripple contained button animation ([f38d078](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f38d078ce997987937dbfbe255f05f3ac4d8e559))
-   **demo:** Fix breaking changes of motion tokens in demo files [A1-711, A1-717] ([602e0c9](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/602e0c9444dd868e6d64ebd0823c5bf1ee8dd337))
-   **demo:** Fix prefix/suffix input field focus outline ([f9b5a4d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f9b5a4d045f1e419f4273c6958d97619dc077d6d))
-   **demo:** Fix ripple button effect and revert plain button underline animation attempts ([385f35e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/385f35e5f72d457c16f2298d8400db5d5e1b1534))
-   **demo:** Remove Accordion outline on click ([#82](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/82)) ([f0b8d0d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f0b8d0d35f0a2af05dbaa3cb1a1e4a743267628b))
-   **demo:** Update Checkbox demo with v0.3.0 tokens [A1-716] ([#84](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/84)) ([3a6cda2](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/3a6cda2530342bbf86a92fe4006a941f02fc562a))
-   **demo:** Update demo files and add first button motion demo [A1-711, A1-717] ([0992989](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/09929897a5a5e858d5d9645877c09c6a7e857b62))
-   **demo:** Update Headline demo [A1-715] ([#85](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/85)) ([de2dab1](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/de2dab130d2339b46b4f3b5d66422153c5692ee5))
-   **demo:** Using the CDN token asset files for the demos ([e5a107c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/e5a107c29ddb45cadf5952bb5ad807dc92b973df))
-   **readme:** Remove obsolete latest docs from the token-package README ([75060fa](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/75060fa85a94113d2902b5dc190c757bdf7703f6))
-   **readme:** Reworked and updated README files ([1295122](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/129512274a5ab642e64a9ac1b27cf9fa07a183f7))
-   **readme:** Updated missing NPM configurations in the readme file ([6357e4e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6357e4eec3124a2843c57a326086b5ccf8556125))

## [0.3.0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.2.1...tokens-v0.3.0) (2023-12-05)

### ⚠ BREAKING CHANGES

-   **semantic:** Made signal color naming specific for the corresponding surface same as with information colors
-   **semantic:** Added missing case-specific on-color for information semantic colors
-   **radio-button:** Reworked Radio-Button tokens and preparations for the radio-button tile component
-   **icon:** Reworked icon component variant tokens
-   **header:** Deleted very early experimental header tokens for now
-   **dropdown:** Reworked and refined dropdown tokens
-   **checkbox:** Token checkbox-label-gap renamed to checkbox-gap
-   **button:** Updated semantic references and deleted unnecessary state tokens
-   **badge:** Restructured Badge tokens into subtle and attention variants with updated semantic references
-   **text-area:** Adjusted Text-Area stack token and added message and hint text-area inset tokens
-   **text-input:** Renamed component Text-Field to Text-Input
-   **semantic:** Responsive headline tokens renamed from viewport to breakpoint key word and interactive shortened to action
-   **semantic:** Reworked semantic color tokens a.o. deleted alpha disabled and interactive key word shortened to just action
-   **core:** Adding new size 150 and new border-radius 200 and deleting border-width 150 in the core tokens
-   **core:** Deleted obsolete alpha core tokens and adjusted inverse colors with special alpha values

### Features

-   **checkbox:** Adding on-action checkbox variant, needed in the checkbox-tile component ([181f5f5](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/181f5f59b92d4280a503fa53148dd4874689adaf))
-   **choice-button:** Prepared Choice-Button component tokens ([90d72d5](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/90d72d51201efe46470383c086342452956453ec))
-   **core:** Adding new size 150 and new border-radius 200 and deleting border-width 150 in the core tokens ([41c4f28](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/41c4f2834eba863b013a3f3ed75314bc35b37441))
-   **dropdown:** Reworked and refined dropdown tokens ([d645901](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d64590122c6a255cb0973ed00864a0a36ddc6fcc))
-   **icon:** Reworked icon component variant tokens ([94cfb71](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/94cfb714d0c6ca7f8aca98ca131b34ea668a83c6))
-   **motion:** Add new motion token theme dimensions for first components ([2c4c358](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2c4c35855afce0dc569ebb7d3593f438f0efee9c))
-   **motion:** first proposal for animation design tokens [A1-569] ([21530a0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/21530a0ed0cd4ae5b6deb4eba7514a7caeef808b))
-   **motion:** Reworked first motion tokens and add a few more for the first components ([1abf453](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/1abf4535f351e5bf910105467a3408b9b4474e37))
-   **output-files:** Providing design and motion tokens as tree shakable ES6 Javascript constants [A1-694] ([f83219b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f83219bef5afc51d76499f2e8d57e44c2a263dc3))
-   **partials:** Added Input-Field read-only color ([20bfa8a](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/20bfa8a1f50981d3883fafe3bdd52178fa0b55ff))
-   **switch:** Added initial Switch component tokens ([2dc4534](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2dc4534a60d50fd0710543ce3c89461c8f7df9c1))
-   **tab:** Prepared tab tokens in spacious and dense ([6479982](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/64799825b677abeb845890e2ab8518effc9ea2f1))
-   **tag:** Added initial Tag component tokens ([48be552](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/48be552cb70498984b3477df5bbf3483c7c51797))
-   **tile:** Added initial Tile component tokens ([f7adf88](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f7adf88b5732347d64d8431e59816d47f05b1cd8))

### Bug Fixes

-   **accordion:** Add missing Accordion headline gap token and updated color token ([0bb460e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/0bb460ef2ecdd8809542b1f2989b33c4639eca3d))
-   **accordion:** Updated Accordion border-color ([c4e92d7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c4e92d7e69765232007d6d012123f70d238dd1e9))
-   Added missing checkbox group stack ([772843d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/772843d4876e3d637481ac7440dc6c0c94b9e75d))
-   **button:** Updated semantic references and deleted unnecessary state tokens ([fc1d961](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/fc1d9614d87fbf9f852767f55c8dc1f36ab6e3fb))
-   **checkbox:** Token checkbox-label-gap renamed to checkbox-gap ([9cddd28](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/9cddd28ba66723e7997157e119f2987518fd8a63))
-   **core:** Deleted obsolete alpha core tokens and adjusted inverse colors with special alpha values ([50ede39](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/50ede39bf62ec214117f5c22a3390027f95d7ccb))
-   Fix token set order and animation dimension case ([149c5d8](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/149c5d8e4b8709813dff1cf532cbec9851d4ec23))
-   **header:** Deleted very early experimental header tokens for now ([d528ee3](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d528ee38f1fd65cf6cd391c69509e02895a3e830))
-   **link,callout:** Updated semantic references for callout and link components ([666af79](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/666af799f36b338a949d2b40589f9ec6a4d8b52e))
-   **partials:** Updated semantic color references for Hint, Indicator, Input-Field and Label ([a075af7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/a075af76fdc2d90e6b28640a657149cd8ffbe12f))
-   **semantic:** Added missing case-specific on-color for information semantic colors ([8598ccb](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/8598ccb58b5ede7c70366fe63fc2a84f3eb9e8e6))
-   **semantic:** Made signal color naming specific for the corresponding surface same as with information colors ([fc7a61c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/fc7a61c4970716a77e58a8e91c5451385a756b40))
-   **text-area:** Adjusted Text-Area stack token and added message and hint text-area inset tokens ([7ce96bd](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/7ce96bdbdd6460bce5911895b72bba7fd5e09601))
-   **badge:** Restructured Badge tokens into subtle and attention variants with updated semantic references ([1a34a13](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/1a34a13e9c5c73ff49045a48326a5c6f1786558c))
-   **radio-button:** Reworked Radio-Button tokens and preparations for the radio-button tile component ([f675856](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f67585622f6d3a18600945665b10606b5ea825e9))
-   **semantic:** Responsive headline tokens renamed from viewport to breakpoint key word and interactive shortened to action ([d7613b3](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d7613b38115e3260e6fe97761440a0751c5165c4))
-   **semantic:** Reworked semantic color tokens a.o. deleted alpha disabled and interactive key word shortened to just action ([c6ebdf4](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c6ebdf4d732c3396512565e3434a7ebc97541ff6))
-   **text-input:** Renamed component Text-Field to Text-Input ([d55dfab](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d55dfab97d927d8ccdc2885c1026a852aaf96740))

### Documentation

-   **accordion:** Added Accordion demo PoC example [A1-652] ([#72](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/72)) ([013a6a1](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/013a6a164e2c2769332eea1f0c17c1734871088d))
-   **radio-button:** Added Radio-Button demo example [A1-687] ([#74](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/74)) ([32b3e06](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/32b3e06f8741dccbaf5bcdcd3a550e70f969ddab))

### [0.2.1](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.2.0...tokens-v0.2.1) (2023-11-17)

### Bug Fixes

-   Fix alpha modify reference resolution [A1-670] ([#71](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/issues/71)) ([a7188a0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/a7188a0519d8a98d8d3b9aaf747974c048f2683d))
-   **tokens:** delete obsolete plugin beta version $extensions ids ([18711b6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/18711b6db60e02789691d7886be57ff891e94356))

## [0.2.0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.1.0...tokens-v0.2.0) (2023-09-28)

### ⚠ BREAKING CHANGES

-   **semantic:** Renamed semantic positive to callout color for the button
-   Alpha color values updated, Figma specific theme added, reworked accent disabled readonly colors
-   **semantic:** Refactored semantic token set

### Features

-   **accordion:** Initial tokens for accordion prepared ([818b97f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/818b97fb6379b161eaf0e896567db7cb1d1061d2))
-   Added disabled variant to badge (reason: integration of counter badge for dropdown multiselect select count indication) ([9de8d14](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/9de8d14fd83197e6011c19dbfb15609a24d44b24))
-   Added max-width tokens for each breakpoint. They are not needed for implementation, but help the design library to support min- and max-width. ([c06ea00](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c06ea0088619b623c5d3dc353014d09227e21d13))
-   Added shadows to the core ([5932e57](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/5932e571525e8dca6d7ba0731102c2f2d90fe24c))
-   **callout:** Separated promotional element badge tokens into own callout component ([ffd6cf5](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/ffd6cf50ea0ff26f94a8d3f2742c8bcfa2daa4dc))
-   Change of elevation tokens ([4cf33f9](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/4cf33f986e36b99385ea8c7992779a557f2d9325))
-   **checkbox, radio-button:** Updated readonly check/dot now has a distinct color tokens ([1ab721d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/1ab721d39721f20ff69651d99b33eb0855224cd0))
-   **core:** Changed value on gray tones ([c9f18e4](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/c9f18e4e4ce8ac0b0694ec07857feba1ab7995dc))
-   **divider:** Added new divider component and updated dropdown tokens ([2e35368](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2e353687b626f8a3efbfb2765a8ee9575965faec))
-   **dropdown:** Reworked Dropdown item and droplist tokens for dense mode ([eb46f83](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/eb46f838c4cd5cf05899a76a443f8b689b3c6b50))
-   **elevation:** Added five elevation levels each consisting of two shadows ([140e717](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/140e7177ae015eedd2618a1c0abe84505840b322))
-   Finished defining dropdown flyout incl. elevation ([5b6b074](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/5b6b074b0fc55b735de340e243dd76ec905e3687))
-   First draft elevation tokens in semantic layer ([42fd129](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/42fd129d9a434a0ced54a630f0e5484be15dcb36))
-   **grid:** Add reworked Grid tokens ([7e5783e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/7e5783e0cfeca685c02fefd4332da0963640c1ec))
-   Issue with the plugin and communication ("blue dot") of unsent changes ([b1e3292](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/b1e3292ed0c86201e3804d6d79390c3950f9a3fa))
-   **radio-button:** Added interaction styles to selected radio button ([2db6a51](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2db6a5145c918958641cdefae2642fe8d6abaca4))

### Bug Fixes

-   Added missing alpha values ([9561f7b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/9561f7bc2108e22e7707fb292168028a615910c7))
-   **badge:** Added missing badge border-radius ([d059000](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d059000d62cc5e7fb252408d83e3dcda30b61af9))
-   **badge:** badge was located under partials, now it is a component ([9640a62](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/9640a623760d84ae546543f86c6f0d77eeaa0c39))
-   **badge:** Fixed callout color from blue to yellow ([4149d38](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/4149d385207c70352374c7f6d54986a1dcc1e91f))
-   **badge:** Fixed wrong badge color variant names ([8859095](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/88590950ad3db9f5f24bb4a9986433b6c4398afd))
-   **callout:** Fixed missing callout border-radius ([7527d2a](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/7527d2a4bd67fd0e6ee0f06c67bf71f2db7643ff))
-   **callout:** Fixed wrong callout color name ([4ae6630](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/4ae6630aa1d688051fec081cd364c17ca6c7cc8d))
-   Changed button variant naming from callout to attention ([41c1d92](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/41c1d92986006b21c4e1b9c88c0eca03de3772d5))
-   Changed component & partial structure to include "default" for light/spacious tokens ([f5e58d3](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f5e58d3b5eeb81b7c65c9bafff80dcf2aa64de1e))
-   **checkbox, radio-button:** Fixed inverse disabled colors ([90f7d1a](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/90f7d1a10a6d25935e5b841957f6a9904b7cbbf7))
-   **checkbox, radio-button:** Fixed wrong surface/border color naming for checkbox and radio button ([85af41f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/85af41f92cceac1d445a076410a08ae4aded833c))
-   Filter out private tokens again [A1-650] ([f2d926d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f2d926dd126a76c925611744cf2e057871d6675f))
-   **indicator:** Fixed spacious button plain m count indicator placement ([04ac266](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/04ac266285bb1e6327b55d806a70ab1544cc6cea))
-   **input-field:** Replaced private Figma only input height with min-height ([f4ca27c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f4ca27cf2dd6656e3259a1307bea19b80b6ac15f))
-   **radio-button:** Add missing dense border-width token to temporarily fix build ([edddf61](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/edddf61657876b7392187a676fd00890b6a35c49))
-   **radio-button:** Replace missing dense border-width token with its semantic token reference to fix build ([0bbc2a6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/0bbc2a6e3dc0aba0e26afaccc4cb3800a89e22f9))
-   **semantic:** Aligned transparency method in dark tokenset to alpha modifier instead of rgba ([285c556](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/285c556781593c75146e5fa15f9af59e0ae51989))
-   **semantic:** Fixed spacious static/dynamic spacing scale ([ed54b11](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/ed54b11682e67174d18a97d773736959cff54209))
-   **semantic:** Refactored dark colors according to light refactoring ([cef173e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/cef173e2071a27f394d6094e12fac09b0292386a))
-   **semantic:** Renamed semantic positive to callout color for the button ([cf9924a](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/cf9924ac9b32518df281e681b0aa0bbce9ee6072))
-   **token-order:** Add manual sorted selectedTokenSets and detailed comment about JS object property order safety [A1-661] ([76e9cf7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/76e9cf72664dbfa83807d48f967c9a48eea9a75a))
-   Alpha color values updated, Figma specific theme added, reworked accent disabled readonly colors ([25e2ced](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/25e2ced518b9c88ce37e582463a2f7119fbf4434))
-   **semantic:** Refactored semantic token set ([d20e610](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/d20e61009865cb7cea2e6af385e15fb80c065ead))

## [0.1.0](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.0.7...tokens-v0.1.0) (2023-08-17)

### ⚠ BREAKING CHANGES

-   Refactored token structure to be more multi-dimensional theming complaint
-   **indicator:** Reworked partial indicator details
-   **partials:** Removed "partial" from token names in the partial sets
-   New token set structure for partials and components

### Features

-   **badge:** Finalized badge component tokens ([f024657](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f024657a979986681a45450718ef6f5187621c0f))
-   **badge:** Prepared badge component tokens ([639544d](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/639544d7f3712493c8d52d6fcb47e07d0315a4f3))
-   New token set structure for partials and components ([2fb96cf](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2fb96cf017088403e271c62ad48e6d0596baf28d))
-   **partials:** Removed "partial" from token names in the partial sets ([47d03a6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/47d03a60eea26d31369fb5c8d1b3701daff567ae))
-   Refactored token structure to be more multi-dimensional theming complaint ([391794b](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/391794b58b9b6e92ebe9be21b2987f3f95b0c2fd))

### Bug Fixes

-   **color-schemes:** Replace leftover hardcoded box-shadow values with core token references ([0173663](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/01736630b8f7dfcaa3af8bc1ca353acd2d043657))
-   Fix unnecessary whitespaces and delete duplicate viewport core tokens ([8d775c4](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/8d775c4051349fc7df76fe1bd56c9212c4f03c19))
-   **indicator:** Reworked partial indicator details ([7da88ac](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/7da88acf7048c0ccf4e8bb4cfe28573835bdbc32))

### Documentation

-   **checkbox-radio-button:** align checkbox and radio button micro animation poc [A1-523] ([166c797](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/166c79759ef6a134acd8a9bfa2ec0bcc82b18d64))
-   **radio-button:** radio button border animation [A1-523] ([2fd3c0c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2fd3c0c5dcc6211291fca1544321914c42ca942b))

### Refactors

-   Moved both densities and color-schemes folder under a semantic folder ([5f8390f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/5f8390f1d67cd4378609edecc0d3683862194d18))

### [0.0.7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.0.6...tokens-v0.0.7) (2023-06-30)

### Features

-   **badge:** prepared first badge tokens WIP ([6fe300c](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6fe300c173db2e02e8bc923ac92f0deb52d4ae40))
-   **checkbox:** add checkbox tokens ([71c910e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/71c910e3470ddd972d148b42565eb2c6ce3c281d))
-   **icon:** add icon tokens ([6bff994](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6bff9942b86b3297cae2ffaf4304225d244fd3e4))
-   **label:** add additional "optional" marker text styles ([cf33009](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/cf33009c241482f7b469ccbe5b0239a302d16c72))
-   **radio-button:** add radio button input tokens ([2cfe063](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2cfe063b2ab7f029eb4857198d34492af8fa0e58))
-   **semantic:** add missing dynamic spacing sets (2 + 3 steps down) ([10c0fb9](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/10c0fb9c9558ddb3adb49304e1206b9c143af572))

### Bug Fixes

-   **core:** change yellow 100 due to contrast issues ([78ce7c7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/78ce7c7eac0cd3edf5500269f264fc34c63e8d14))
-   **focus:** deleted focus partial and put styles back to semantic layer ([47894ef](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/47894efed201d3211a7b1d74749d740a49130d52))
-   **semantic:** add a couple more sizes to the semantic layer ([2c05f55](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2c05f55abccdd0365aa854bf5cfa56b96f6cd1a3))
-   **semantic:** add missing graphics inverse semantic color tokens ([80aafaf](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/80aafaff9de3ad1e4c0bc2d33232fc17147877f2))

### [0.0.6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/compare/tokens-v0.0.5...tokens-v0.0.6) (2023-06-01)

### Features

-   **focus:** Focus is now represented as own partial ([361380e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/361380e2caff35e83f8a867870c7c06ab8bea552))

### Bug Fixes

-   **core:** Rename breakpoint to viewport ([2b5038e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2b5038eb27aa1bdb5f690d60c023dec9fc716996))
-   **font-family:** fix font family name in quotes [A1-493] ([3b6aea7](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/3b6aea746d6a7ff725838f3d8fe9c9dc16663f09))
-   **message:** notification partial renamed to message ([646c401](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/646c40182b9eef82440a61720f756d79b7d9cccf))
-   **semantic:** Border-width decision of 1px in order to prevent sub-pixel rounding issues ([28e7657](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/28e765768271ce7436b32d0fdbcb2815f11eeee0))
-   **semantic:** Button sizes renamed to t-shirt sizes (m always default, will be part of the docs) ([27009f6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/27009f6b520ed26e684a3440b96e273b83719393))
-   **semantic:** Combining static and dynamic spacings in the semantic layer ([fd46c9f](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/fd46c9fd705d2ebb14aed624e0eac3f574b6a758))
-   **semantic:** Inverted was renamed to inverse (saved 1 character) ([72ed01e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/72ed01e74cd0e371816657fa771cd75ca7a45e1f))
-   **semantic:** Only adds relevant viewport-l headline responsive tokens ([dd4ab4a](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/dd4ab4ad3d5482c6833c2286541bf226b8bc66ac))
-   **semantic:** Restructuring t-shirt sizes for the headlines ([b676efc](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/b676efc57ad0863fa1dbae5bdc0b6dfd559ee6a4))
-   **semantic:** Token name shortening of text-style to just text ([2f28649](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/2f2864986d22cd8cd23a7b8d46a73bf614390598))
-   Several renaming, restructurings in semantic and their reference token updates in the partials and components ([f76887e](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/f76887e28476b2eded3a5e0a599db17e82ce5324))
-   **text-decoration:** fix text-decoration to be in lower case [A1-494] ([6d206c6](https://github.developer.allianz.io/a1/design-tokens/tree/main/token-package/commit/6d206c6d02503e54b8ac6aaf980e75923117c5d7))
