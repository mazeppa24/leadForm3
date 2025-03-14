// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.aem.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `default` environement maps to `dev` environement
export const environment = {

  /* App Settings */
  applicationId: 'allianz-leadform',
  applicationName: 'Allianz LeadForm',
  appVersion: require('../../package.json').version,
  stage: 'local-dev',

  /*CloudFlare Turnstile*/
  turnstileToken: "3x00000000000000000000FF", //testing: forces interaction
  //turnstileToken: "2x00000000000000000000AB", //testing: always fails (visible)
  //turnstileToken: "1x00000000000000000000AA", //testing: always passes (visible)
  //turnstileToken:"0x4AAAAAAA8XMHEjRLdDqBj4", //allianz.ch
  //turnstileToken:"0x4AAAAAAA8YxhZmNlQT1spM", //localhost


  /* APIs*/
  // elcaLeadsApi: 'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/all-leads/new',
  // elcaLeadApiSecret: 'random-secret',
  elcaMailApi:
    'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/leadforms',
  elcaMailApiSecret: 'random-secret',

  leadNavApi: 'https://dsp-bff-lead-navi-develop.dev.xs1.azure.aztec.cloud.allianz/fcp/dsp-bff-lead-navi-develop/v1/api/customers/', // FLUX DEV FCP
  leadNavApiSecret: 'Sicabe26loce',

  imageApi: 'https://www.allianz.ch/crp/dsp_bff_lead4you/ext/v1/agentinfo/',
  imageApiSecret: '9b3fa5379cb9e332aa1798fd9ef5563929aa570b64897a93055a3ad34601fe2e',

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
