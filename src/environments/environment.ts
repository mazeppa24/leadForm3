// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.aem.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `default` environement maps to `dev` environement
export const environment = {

  /* App Settings */
  appVersion: require('../../package.json').version,
  applicationId: 'allianz-leadform',
  applicationName: 'Allianz LeadForm',
  stage: 'default',

  /*CloudFlare Turnstile*/
  turnstileToken:"0x4AAAAAAA8YxhZmNlQT1spM", //localhost
  //turnstileToken: "2x00000000000000000000AB"; //testing: always fails (visible)
  //turnstileToken: "1x00000000000000000000AA"; //testing: always passes (visible)
  //turnstileToken:"0x4AAAAAAA8XMHEjRLdDqBj4", //allianz.ch

  // /* APIs */
  // elcaLeadsApi: 'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/all-leads/new',
  // elcaLeadApiSecret: 'random-secret',
  elcaMailApi:
    'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/leadforms',
  elcaMailApiSecret: 'random-secret',

  leadNavApi: 'https://dev.aem.allianz.allianz-suisse.ch/crp/dsp_bff_lead_navi/api/',
  leadNavApiSecret: 'Sicabe26loce',

  imageApi: 'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/agentinfo/',
  imageApiSecret: 'random-secret',

  // DEFAULT Values
  defaultEmail: 'leads-test@allianz-suisse.ch',
  defaultAgencyID: "AS720",

  /* Build Settings */
  deployUrl: '/',
  baseUrl: '/',
  baseHref: '/',
  assetsBasePath: '/assets',
  adobeUrl: '',
  production: false,
  client: 'allianz'
};
