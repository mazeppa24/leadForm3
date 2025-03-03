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
  turnstileToken:"0x4AAAAAAA8YxhZmNlQT1spM", //localhost
  //turnstileToken: "2x00000000000000000000AB"; //testing: always fails (visible)
  //turnstileToken: "1x00000000000000000000AA"; //testing: always passes (visible)
  //turnstileToken:"0x4AAAAAAA8XMHEjRLdDqBj4", //allianz.ch


  /* APIs */
  // elcaLeadsApi: 'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/all-leads/new',
  // elcaLeadApiSecret: 'random-secret',
  elcaMailApi:
    'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/leadforms',
  elcaMailApiSecret: 'random-secret',

  leadNavApi: 'http://localhost:8080/v1/api/customers/', // FLUX DEV WAF INTRANET
  leadNavApiSecret: 'random-secret',

  imageApi: 'https://app.aaks.azchportal-dev.we1.azure.aztec.cloud.allianz/crp/lead-4-you-be-develop/ext/v1/agentinfo/',
  imageApiSecret: 'random-secret',

  mailServer: 'https://allianz-mailer.lespals.com/sendmail_prod.php',
  defaultEmail: 'leads-test@allianz-suisse.ch',

  /* Build Settings */
  deployUrl: '/',
  baseUrl: '/',
  baseHref: '/',
  assetsBasePath: '/assets',
  adobeUrl: '',
  production: false,
  client: 'allianz'
};
