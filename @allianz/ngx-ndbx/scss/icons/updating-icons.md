# How to update the icon component

## Status quo

We mirror the icon component classes and don't use the c-icon classes as we want to have the nx prefix to be save from css bleeding into angular applications. In order to reduce the manual effort here to a minimum there is a script `create-icon-map.js` which creates the sass map automatically from the allianz icons package for you.

current icon version: **2.29.0** --- from [Global Allianz Icons](https://github.developer.allianz.io/oneMarketing/allianz-icons)

## Updating

-   Download the icon font package using the artifactory link from the latest release here: https://github.developer.allianz.io/oneMarketing/allianz-icons/releases. If you are missing the right login credentials, ask a colleague with access to provide the package zip.
-   At the time being there is `icons.json` file with all names and unicode characters in it
-   run `node scripts/create-icon-map.js path/to/icon/package/dist/icons.json > projects/ngx-ndbx/src/styles/icons/icon-list.scss`
-   check if the `icon-list.scss` file was updated properly. the `icon-list.scss` gets imported into the `icon.component.scss` file
-   copy the font files into `projects/ngx-ndbx/src/styles/fonts/allianz-icons`
-   copy the `icons.json` to `projects/ngx-ndbx/documentation/examples/icon-list-functional` and `projects/ngx-ndbx/documentation/examples/icon-list-product` and the list in the documentation gets updated as well
