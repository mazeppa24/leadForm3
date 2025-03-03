/**
 * Loader util for AEM.
 *
 * The build script (./scripts/lib/aem.ts:compileLoader) replaces the REPLACE
 * placeholder with actual values and compiles & minifies the script.
 */

(function () {
  const scripts = ['$REPLACEJS$'];
  const css = ['$REPLACECSS$'];

  // adding hashed origin as a query string, as a workaround for buggy browser cache behavior when using CORS and Vary: Origin
  const originHash = '?' + hashString(window.location.protocol + window.location.host);

  insertCSS();

  const scriptSrcRegex = /<script.*?src="(.*?)"/;

  let appServerURL;
  // undefined can be a valid value for the appServerURL. So we use a separate flag
  let onlyDetermineItOnce = false;

  // This simple approach just adds all the script tags with the same attributes as in the original index.html
  scripts.forEach(function (element) {
    const div = document.createElement('div');
    div.innerHTML = element;
    const origScriptElement = div.getElementsByTagName('script')[0];

    const scriptElement = document.createElement('script');

    // It does not work to read the src of the already created element (origScriptElement) here, as the browser already changed the url
    // Value has to be read directly from the original string
    const match = scriptSrcRegex.exec(element);
    if (match) {
      scriptElement.src = getAbsoluteLocationOfResource(match[1]);
      scriptElement.async = origScriptElement.hasAttribute('async');
      scriptElement.defer = origScriptElement.hasAttribute('defer');
      scriptElement.type = origScriptElement.type;
      scriptElement.noModule = origScriptElement.hasAttribute('noModule');

      document.body.appendChild(scriptElement);
    } else {
      throw Error('Was not able to determine src');
    }
  });

  function getAbsoluteLocationOfResource(src: string) {
    const resAppServerURL = getAppServerURL();
    let url;
    // Checks if the deploy-url was set with a path or absolute URL.
    // A path or absolute URL both contain a /
    if (resAppServerURL && src.indexOf('/') === -1) {
      url = resAppServerURL + src + originHash;
    } else {
      url = src + originHash;
    }
    // Remove multiple /
    url = url.replace(/([^:]\/)\/+/g, '$1');

    return url;
  }

  function insertCSS() {
    if (css && css.length > 0) {
      css.forEach((cssFile) => {
        const cssElement = document.createElement('link');
        cssElement.rel = 'stylesheet';
        cssElement.href = getAbsoluteLocationOfResource(cssFile);

        document.body.appendChild(cssElement);
      });
    }
  }

  function getAppServerURL(): string {
    if (onlyDetermineItOnce) {
      return appServerURL;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((document as any).aemIntegrationAppServerURL) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      appServerURL = (document as any).aemIntegrationAppServerURL;
    }

    try {
      if (!appServerURL && document && document.currentScript) {
        const thisScript = document.currentScript;
        appServerURL = getPathFromURL(thisScript.getAttribute('src'));
      }
    } catch (error) {
      // Not empty block statement
    }

    // Fallback if upper retrieval logic does not work (i.e. for IE11)
    if (!appServerURL) {
      try {
        appServerURL = getAppServerURLFromAllScripts();
      } catch (error) {
        // Not empty block statement
      }
    }

    if (appServerURL === './') {
      appServerURL = undefined;
    }

    if (appServerURL) {
      // Storing the determined URL in document so it can be used by other parts:
      // (aemIntegrationDeployURL is defined in ./library/src/constants)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).aemIntegrationAppServerURL = appServerURL;
    }
    onlyDetermineItOnce = true;
    return appServerURL;
  }

  function getAppServerURLFromAllScripts(): string {
    const allScripts = document.scripts;
    let scriptAppServerURL: string;
    for (let i = 0; i < allScripts.length; i++) {
      const currentSrc = allScripts[i].getAttribute('src');
      if (currentSrc !== undefined && currentSrc !== null && currentSrc.indexOf('index.js') !== -1) {
        scriptAppServerURL = getPathFromURL(currentSrc);
        break;
      }
    }
    return scriptAppServerURL;
  }

  function getPathFromURL(url: string): string {
    return url.substring(0, url.lastIndexOf('/')) + '/';
  }

  function hashString(str: string) {
    let hash = 0;
    if (str.length === 0) {
      return hash;
    }
    for (let i = 0; i < str.length; i++) {
      /* tslint:disable-next-line:no-bitwise */
      hash = (hash << 5) - hash + str.charCodeAt(i);
      /* tslint:disable-next-line:no-bitwise */
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }
})();
