export default `
<!DOCTYPE html>
<!-- saved from url=(0092)https://showroom.dmcgroup.eu/allianz-mailtemplates3/templates/generic/inform/onboarding.html -->
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" data-lt-installed="true"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- utf-8 works for most cases -->
  <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
  <meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"> <!-- Tell iOS not to automatically link certain text strings. -->
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

  <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
  <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->

  <!-- Web Font / @font-face : BEGIN -->
  <!-- NOTE: If web fonts are not required, lines 23 - 41 can be safely removed. -->

  <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
  <!--[if mso]>
<style>
* {
font-family: sans-serif !important;
}

.btn-secondary  {
padding-bottom: 1px;
}
</style>
<![endif]-->

  <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
  <!--[if !mso]><!-->
  <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
  <!--<![endif]-->

  <!-- Web Font / @font-face : END -->

  <!-- CSS Reset : BEGIN -->
  <style>
  /* What it does: Tells the email client that only light styles are provided but the client can transform them to dark. A duplicate of meta color-scheme meta tag above. */
  :root {
  color-scheme: light dark;
  supported-color-schemes: light dark;
  }

  /* What it does: Remove spaces around the email design added by some email clients. */
  /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
  html,
  body {
  margin: 0 auto !important;
  padding: 0 !important;
  height: 100% !important;
  width: 100% !important;
  }

  /* What it does: Stops email clients resizing small text. */
  * {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }

  /* What it does: Centers email on Android 4.4 */
  div[style*="margin: 16px 0"] {
  margin: 0 !important;
  }

  /* What it does: forces Samsung Android mail clients to use the entire viewport */
  #MessageViewBody,
  #MessageWebViewDiv {
  width: 100% !important;
  }

  /* What it does: Stops Outlook from adding extra spacing to tables. */
  table,
  td {
  mso-table-lspace: 0pt !important;
  mso-table-rspace: 0pt !important;
  vertical-align: top;
  }

  td.caption {
  width: 200px;
  }

  td.cwmessage {
  padding: 20px;
  }

  /* What it does: Replaces default bold style. */
  th {
  font-weight: normal;
  }

  /* What it does: Fixes webkit padding issue. */
  table {
  border-spacing: 0 !important;
  border-collapse: collapse !important;
  table-layout: fixed !important;
  margin: 0 auto !important;
  }

  /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
  a {
  text-decoration: none;
  }

  /* What it does: Uses a better rendering method when resizing images in IE. */
  img {
  -ms-interpolation-mode: bicubic;
  }

  /* What it does: A work-around for email clients meddling in triggered links. */
  a[x-apple-data-detectors],
  /* iOS */
  .unstyle-auto-detected-links a,
  .aBn {
  border-bottom: 0 !important;
  cursor: default !important;
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  }

  /* What it does: Prevents Gmail from changing the text color in conversation threads. */
  .im {
  color: inherit !important;
  }

  /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
  .a6S {
  display: none !important;
  opacity: 0.01 !important;
  }

  /* If the above doesn't work, add a .g-img class to any image in question. */
  img.g-img+div {
  display: none !important;
  }

  /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
  /* Create one of these media queries for each additional viewport size you'd like to fix */

  /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
  @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
  u~div .email-container {
  min-width: 320px !important;
  }
  }

  /* iPhone 6, 6S, 7, 8, and X */
  @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
  u~div .email-container {
  min-width: 375px !important;
  }
  }

  /* iPhone 6+, 7+, and 8+ */
  @media only screen and (min-device-width: 414px) {
  u~div .email-container {
  min-width: 414px !important;
  }
  }
  </style>
  <!-- CSS Reset : END -->

  <!-- Progressive Enhancements : BEGIN -->
  <style>
  /* What it does: Hover styles for buttons */
  .button-td,
  .button-a {
  transition: all 100ms ease-in;
  }

  .button-td-primary:hover,
  .button-a-primary:hover {
  background: #555555 !important;
  border-color: #555555 !important;
  }

  .align-left {
  margin-left: 0 !important;
  }

  .show-on-mobile {
  display: none !important;
  }

  /* Font */
  @media screen {
  @font-face {
  font-family: 'Allianz Neo';
  font-style: normal;
  font-weight: 200;
  src: local('AllianzNeo-Light'), url(https://res.messaging.allianz.com/res/azeu_mid_prod2/04faa652b7a29a992e8459d7326c2a98.woff2) format('woff2');
  }

  @font-face {
  font-family: 'Allianz Neo';
  font-style: normal;
  font-weight: 400;
  src: local('AllianzNeo-Regular'), url(https://res.messaging.allianz.com/res/azeu_mid_prod2/aaab91c6d7729ee137ae79af4f7878da.woff2) format('woff2');
  }

  @font-face {
  font-family: 'Allianz Neo';
  font-style: normal;
  font-weight: 600;
  src: local('AllianzNeo-SemiBold'), url(https://res.messaging.allianz.com/res/azeu_mid_prod2/24d2aeee73ec38d815b499603574dda3.woff2) format('woff2');
  }

  @font-face {
  font-family: 'Allianz Neo';
  font-style: normal;
  font-weight: 700;
  src: local('AllianzNeo-Bold'), url(https://res.messaging.allianz.com/res/azeu_mid_prod2/12f8246a8f006776b20ccaab28a321d0.woff2) format('woff2');
  }
  }

  /* Media Queries */
  @media screen and (max-width: 480px) {
  .stack-column-small {
  display: block !important;
  max-width: 100% !important;
  direction: ltr !important;
  }

  .stack-column-border {
  border-bottom: 1px solid #d9d9d9;
  width: auto;
  }

  .header-description {
  padding-top: 8px !important;
  padding-bottom: 7px !important;
  width: auto;
  font-size: 11px !important;
  line-height: 12px !important;
  letter-spacing: 0.4px !important;
  }

  .header-logo {
  padding-top: 4px !important;
  padding-bottom: 3px !important;
  width: auto;
  }

  .border-left {
  border: 0 !important;
  padding: 0 !important;
  height: auto !important;
  }

  .header-logo-right {
  width: 169px;
  }

  .header-logo-right img {
  max-height: 32px !important;
  }
  }

  @media screen and (max-width: 600px) {
  .email-container {
  width: 100% !important;
  margin: auto !important;
  }

  /* What it does: Forces table cells into full-width rows. */
  .stack-column,
  .stack-column-center {
  display: block !important;
  width: 100% !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  max-width: 100% !important;
  direction: ltr !important;
  }

  /* And center justify these ones. */
  .stack-column-center {
  text-align: center !important;
  }

  /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
  .center-on-narrow {
  text-align: center !important;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  float: none !important;
  }

  table.center-on-narrow {
  display: inline-block !important;
  }

  /* What it does: Adjust typography on small screens to improve readability */
  .email-container .headline {
  font-size: 40px !important;
  line-height: 42px !important;
  }

  .email-container .small-headline {
  font-size: 35px !important;
  line-height: 38px !important;
  }

  .email-container .big-headline {
  font-size: 54px !important;
  line-height: 54px !important;
  }

  .align-left {
  margin: 0 auto !important;
  }

  .teaser-img {
  display: inline-block !important;
  height: auto;
  max-width: 100%;
  }

  .first-column {
  margin-bottom: 32px;
  }

  .header {
  padding-top: 16px !important;
  padding-bottom: 15px !important;
  padding-left: 16px !important;
  }

  .header-branding {
  padding-top: 14px !important;
  padding-bottom: 13px !important;
  padding-left: 16px !important;
  }

  .header-branding img {
  max-height: 36px;
  }

  .email-container .header-small {
  font-size: 12px !important;
  line-height: 14px !important;
  letter-spacing: 0.5px !important;
  }

  .padding-large {
  padding-top: 12px !important;
  padding-bottom: 13px !important;
  }

  .padding-medium {
  padding-top: 7px !important;
  padding-bottom: 8px !important;
  }

  .padding-small {
  padding-top: 5px !important;
  padding-bottom: 6px !important;
  }

  .mb-1 {
  margin-bottom: 16px;
  }

  .headline-indent-padding,
  .indent-padding {
  padding-left: 8% !important;
  padding-right: 8% !important;
  }

  .remove-indent-padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
  }

  .show-on-mobile {
  display: block !important;
  }

  .show-on-desktop {
  display: none !important;
  }

  .pb-1 {
  padding-bottom: 16px !important;
  }

  .pb-1-5 {
  padding-bottom: 8px !important;
  }

  .pb-2 {
  padding-bottom: 24px !important;
  }

  .fix-width {
  width: 100% !important;
  }
  }

  /* Dark Mode */
  @media (prefers-color-scheme: dark) {

  /* Wrapper */
  .root {
  background-color: #333 !important;
  }

  .dark-wrapper {
  background-color: #111 !important;
  }

  .dark-wrapper-white {
  background-color: #fff !important;
  }

  .dark-color-white,
  .dark-wrapper,
  .dark-wrapper .dark-link,
  .dark-wrapper p,
  .dark-wrapper h1,
  .dark-wrapper h2,
  .dark-wrapper h3 {
  color: #fff !important;
  }

  .dark-imprint {
  background-color: #444 !important;
  color: #fefefe !important;
  }

  /* icons */
  .dark-img-default,
  .dark-img {
  display: none !important;
  }

  .light-img-wrapper,
  .light-img {
  display: inline-block !important;
  }

  /* Buttons and Links */
  .dark-header-link {
  color: #fff !important;
  text-decoration: underline !important;
  }

  .btn {
  background: #FEFEFE !important;
  }

  .btn-text {
  background: transparent !important;
  border-radius: 4px;
  color: #000000 !important;
  }

  .btn-secondary {
  background: transparent !important;
  }

  .btn-secondary-text {
  background: transparent !important;
  border-color: #fff !important;
  color: #fff !important;
  }

  /* Utilities */
  .dark-underline {
  text-decoration: underline !important;
  }

  .dark-color-white {
  color: #fff !important;
  }
  }

  /* End Dark Mode */

  /* Outlook web clients by exploiting the fact that Outlook appends x_ */
  [class~="x_btn-secondary"] {
  border: 2px solid #006192;
  padding: 10px 32px;
  }

  [class~="x_btn-secondary-invert"] {
  border: 2px solid #ffffff;
  }
  </style>
  <!-- Progressive Enhancements : END -->
  <style>.pb-sidebar-frame-container{position:fixed;top:0;background-color:rgba(0,0,0,0);width:380px;height:100%;right:-380px;transition:right .5s;transition-timing-function:ease;z-index:2147483647}.pb-sidebar-frame-container>iframe{width:100%;height:100%;border-width:0;border-style:initial !important;border-color:initial !important;border-image:initial !important}.pb-sidebar-frame-container.in{right:0}.pb-sidebar-frame-container.out{right:-380px}.pb-notification-frame-container{position:fixed;top:0;background-color:rgba(0,0,0,0);width:363px;height:78px;right:-370px;transition:right .5s;transition-timing-function:ease;z-index:2147483647}.pb-notification-frame-container>iframe{width:100%;height:100%;border-width:0;border-style:initial !important;border-color:initial !important;border-image:initial !important}.pb-notification-frame-container.in{right:7px}.pb-notification-frame-container.out{right:-370px}.pb-notification-frame-container.cop{right:-331px}
  /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcENvbnRlbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsY0FBYyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQywrQkFBK0IsQ0FBQyxrQkFBa0IsQ0FBQyxtQ0FBbUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsK0JBQStCLENBQUMsK0JBQStCLENBQUMsK0JBQStCLENBQUMsK0JBQStCLE9BQU8sQ0FBQyxnQ0FBZ0MsWUFBWSxDQUFDLGlDQUFpQyxjQUFjLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLCtCQUErQixDQUFDLGtCQUFrQixDQUFDLHdDQUF3QyxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQywrQkFBK0IsQ0FBQywrQkFBK0IsQ0FBQyxvQ0FBb0MsU0FBUyxDQUFDLHFDQUFxQyxZQUFZLENBQUMscUNBQXFDLFlBQVkiLCJmaWxlIjoiQXBwQ29udGVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBiLXNpZGViYXItZnJhbWUtY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTt3aWR0aDozODBweDtoZWlnaHQ6MTAwJTtyaWdodDotMzgwcHg7dHJhbnNpdGlvbjpyaWdodCAuNXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTt6LWluZGV4OjIxNDc0ODM2NDd9LnBiLXNpZGViYXItZnJhbWUtY29udGFpbmVyPmlmcmFtZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci13aWR0aDowO2JvcmRlci1zdHlsZTppbml0aWFsICFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOmluaXRpYWwgIWltcG9ydGFudDtib3JkZXItaW1hZ2U6aW5pdGlhbCAhaW1wb3J0YW50fS5wYi1zaWRlYmFyLWZyYW1lLWNvbnRhaW5lci5pbntyaWdodDowfS5wYi1zaWRlYmFyLWZyYW1lLWNvbnRhaW5lci5vdXR7cmlnaHQ6LTM4MHB4fS5wYi1ub3RpZmljYXRpb24tZnJhbWUtY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTt3aWR0aDozNjNweDtoZWlnaHQ6NzhweDtyaWdodDotMzcwcHg7dHJhbnNpdGlvbjpyaWdodCAuNXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZTt6LWluZGV4OjIxNDc0ODM2NDd9LnBiLW5vdGlmaWNhdGlvbi1mcmFtZS1jb250YWluZXI+aWZyYW1le3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLXN0eWxlOmluaXRpYWwgIWltcG9ydGFudDtib3JkZXItY29sb3I6aW5pdGlhbCAhaW1wb3J0YW50O2JvcmRlci1pbWFnZTppbml0aWFsICFpbXBvcnRhbnR9LnBiLW5vdGlmaWNhdGlvbi1mcmFtZS1jb250YWluZXIuaW57cmlnaHQ6N3B4fS5wYi1ub3RpZmljYXRpb24tZnJhbWUtY29udGFpbmVyLm91dHtyaWdodDotMzcwcHh9LnBiLW5vdGlmaWNhdGlvbi1mcmFtZS1jb250YWluZXIuY29we3JpZ2h0Oi0zMzFweH0iXX0= */</style></head>
  <!--
The email background color (#f5f5f5) is defined in three places:
1. body tag: for most email clients
2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
3. mso conditional: For Windows 10 Mail
-->

  <body width="100%" style="margin: 0px; padding: 0px !important; mso-line-height-rule: exactly; background-color: #f5f5f5;">

<div class="root" role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #f5f5f5;">
    <center class="root" role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #f5f5f5;">
  <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
<tr>
<td>
<![endif]-->
    {{mailcontent}}
  <!--[if mso | IE]>
</td>
</tr>
</table>
<![endif]-->
    </center>
</div>
  </body>
</html>
`
