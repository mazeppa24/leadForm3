// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.aem.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `default` environement maps to `dev` environement
export const environment = {

  /* App Settgings */
  applicationId: 'allianz-leadform',
  applicationName: 'Allianz LeadForm',
  appVersion: require('../../package.json').version,
  stage: 'prod',

  /*CloudFlare Turnstile*/
  turnstileToken:"0x4AAAAAAA8XMHEjRLdDqBj4", //allianz.ch

  /* APIs */
  // elcaLeadsApi: 'https://www.allianz.ch/crp/dsp_bff_lead4you/ext/v1/all-leads/new',
  // elcaLeadApiSecret: 'kIgXzMDd0pR86mGN',
  elcaMailApi: 'https://www.allianz.ch/crp/dsp_bff_lead4you/ext/v1/leadforms',
  elcaMailApiSecret: '706fb08cfc2819267dce031082e89714a7efa65bbfd1105dcbaa5199fc648d4f',

  leadNavApi: 'https://adp.allianz-suisse.ch/crp/dsp_bff_lead_navi/api/',
  leadNavApiSecret: 'Dubagu72nuge+',

  imageApi: 'https://www.allianz.ch/crp/dsp_bff_lead4you/ext/v1/agentinfo/',
  imageApiSecret: '9b3fa5379cb9e332aa1798fd9ef5563929aa570b64897a93055a3ad34601fe2e',

  mailServer: 'https://allianz-mailer.lespals.com/sendmail_prod.php',
  defaultEmail: 'leadswettbewerb@allianz.ch',

  /* Build Settings */
  deployUrl: 'https://www.allianz.ch/content/dam/onemarketing/azch/allianz/leadform/',
  baseUrl: '/content/dam/onemarketing/azch/allianz/leadform/',
  baseHref: 'https://www.allianz.ch/content/dam/onemarketing/azch/allianz/leadform/',
  assetsBasePath: 'https://www.allianz.ch/content/dam/onemarketing/azch/allianz/leadform/assets',
  adobeUrl: '',
  production: true,
  client: 'allianz'
};
