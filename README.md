# Leads & Kooperationen "LeadForm"


# Run requirements (!Important!)
- Angular CLI 18
- NodeJS >=v20.11.0


# @allianz libraries
"@allianz/ngx-aem-integration": "20.0.0",
"@allianz/ngx-ndbx": "18.0.0",
"@allianzch/ngx-core-ch": "17.1.3",

# Testing

## LeadGenerator Link examples

- Thomas Gurtner
````typescript
?d=dGhvbWFzLmhhbnMuZ3VydG5lckBhbGxpYW56LXN1aXNzZS5jaA%3D%3D&cp=KB-Formular&ga=AS076
````

- Daniel Stähli
````typescript
?d=dGhvbWFzLmhhbnMuZ3VydG5lckBhbGxpYW56LXN1aXNzZS5jaA%3D%3D&cp=KB-Formular&ga=AS076
````
- 

# Documentation (WIP)

# SPAM prevention
. https://github.com/mziyut/disposable-email-domains-js
- ~~Reject hidden (honeypot) fields~~
- ~~Reject Uppercase Emails~~
- Add: turnstile.onError Analytics with exception code
- detect if the form fields are rapidly being filled out (bot behaviour)
- update the regex to match the full domain spam.com (currently only matches spam without top-level domain)

```typescript

this.stepThreeForm.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      const currentTime = new Date().getTime();
      if (currentTime - this.lastInputTime < this.inputThreshold) {
        console.warn('Rapid input detected!');
      }
      this.lastInputTime = currentTime;
    });

````

- validate comment field ("hi", "god"). Add to blacklist
- SEA (Exclude geographies, add negative keywords linked to spam)
- Rate Limiting by IP
- Filter proxies and vpns
- 3rd Party solutions: e.g https://optickssecurity.com/solution-detection, https://www.trafficguard.ai/solution/business-brands, https://www.anura.io/lead-generation
- 

## Spam Testing

### test hidden field
1.  enable getForm() method in home.component
2. execute the following code to set the hidden field and submit the form
```javascript
const appElement = document.querySelector('app-home');
const ngComponent = ng.getComponent(appElement);

// Fill the honeypot field
ngComponent.getForm().get('bot').setValue('bot');

// Simulate form submission
ngComponent.onsubmit();

// Check the honeypot field value and form submission result
console.log('Honeypot field value:', ngComponent.getForm().get('bot').value);
console.log('Form valid:', ngComponent.getForm().valid);


````

### test email-validation

1. use an email with Uppercase letters //should fail (e.g. "teStER@gmail.com") 
2. use an email with a domain that is in the blacklist //should fail (e.g. "test@armyspy.com") see: contstants.ts for example domains
3. use an email without proper structure //should fail (e.g. "test@test", "x#gmail.com", "test@hotmail" etc. etc.) 


### test rapid form submission
1. comment out the following code in loading-interceptor.service.ts as below
2. Rapidly click on the button to submit the form (should only submit once)
```typescript

// turn on the loading spinner
//this.loadingService.loadingOn();

return next.handle(req).pipe(
  finalize(() => {
    // turn off the loading spinner
    //this.loadingService.loadingOff();
  }),
);

```
# PROD DAM Deployment

````text

npm run build:dam:prod
````
Verify that the productive Launch Script is enabled in the index.html file

````html

  <!-- Launch-Skript -->
  <script src="https://assets.adobedtm.com/dd4adce84cad/abbc6aafdc2c/launch-21614b7362a1.min.js" async></script>
<!--  <script src="https://assets.adobedtm.com/dd4adce84cad/abbc6aafdc2c/launch-b11ffc2dec34-development.min.js" async></script>-->

````




# Change Log

## 14.01.2024
-Commit Test Tony für Arjan

## 03.07.2024

From Adam:
- removed header and footer components
- included new php-mail script that does not append header & footer mail components
- new mail template render service

From Arjan:
- New Agency JSON v2 for Ga-Mail Routing
- Proper Form validation
- If the form is called with the "?d=" query param (link from leadgenerator) the ZIP input field is hidden as well as the zip disclaimer text. In addition the zip validation is disabled


## 04.07.2024

- Mandatory form input hints
- Remove checkbox for Bestandeskunden


## 10.07.2024

From Adam
- Fixed mail-template, service implementation
- I've modified sources.json such that form url are in similar structiore as woher and was (see screenshot) (on the other hand when the form url would be the same for all languages it can be written like this "form_url": "https://example.com",)
- (for Arjan) I've moved Sources Service to SourcesModule so we are able to easily move it between the applications and customize it's behavior (described in the commit log)
- (for Arjan) I've introduced dynamic URL's for the 'assets' path that is dependent on running environment, let's test it out if we can deploy application on AEM without manual changes where the agency.json or sources.json files are being downloaded from. (this is dependent on the changes inside AppModule (the @NgModule.providers array, APP_BASE_HREF entry)

From Arjan
- Agency V2 (Array) variant implemented (same code from adam as in lead-fw, slightly modified)
- Proper build scripts, environment urls, app-config garbage fixes
- Updated analytics tracking

## 11.07.2024

From Arjan
- Fixed a mistake with updated sources.json for form_urls
- Adapted UTM param from "utm_source" to "sc"
- Added some missing/wrong translations to i18n mail-content and sources.json


## 17.07.2024
From Adam
- Language reloading for mail template
- Use Agency Language (defined in agency.json) for Mail Template instead of LeadForm language

From Arjan
- Updated sources.json (translations, cp-keys etc.)
- Set 'leads.origin.name' to "LeadByYou" in case the lead-form has been used with a lead-generator link (?d=XXXXX)


## 22.07.2024
- Updated leadrating appid value for links in mail-template html (allianz-leadform)
- Removed "bootsversicherung" from index.html title

## 23.07.2024
- Fixed language value in Analytics DataLayer (was static 'de' before)
- Urgent TODO: Refactor the whole Analytics implementation!

## 24.07.2024
- Fix for Template Content "Was/Woher" (language has to be preloaded before submit to work due to latency)
- New TEST-GA's (9999 = DE, 9998 = FR, 9997 = IT, 9996 = EN)
- Updated "sources.json" with fixed values and structure.
- Updated LeadForm Rating values from 5 to 4
- Disabled Debug Window-Portal auto-open

## 26.07.2024 (1)
- Updated "keys" in sources.json

## 29.07.2024
From Adam
- Removed static lead link ratings from mail-template. Moved to new lead component
- Add "\n" for better mail display handling
- Expand agency filter to include new TEST-GA entries in sources.json 

## 30.07.2024
From Arjan
- NG-18 Upgrade
- NDBX allianz libs upgrade
- Cleanup of dead dependencies, packages

## 15.08.2024
From Arjan
- New Elca-Service API implementation
- Updated sources.json with new attributes (origin, category, source)

## 04.09.2024
From Arjan
- Updated source definitions (formurls and woher text) for CPs 'fondsanlagen_angebot' and 'fondsanlagen_angebot_affiliate'

## 16.09.2024
From Tony/Arjan
- New U campaign value in sources.json 

## 19.09.2024
From Arjan
- Fix Bug: Add missing GA 501 (Direktionsagentur) to agency.json and update validation logic
- Additional Mail template values (campaign, environment)
- Tutti external Link logic

## 20.09.2024
From Arjan
- New display/sea campaigns (Caspar)
- Small fixes to template rendering (language settings)

## 26.09.2024
From Arjan
- New Anibis campaign sources.json update

## 04.10.2024
- New mail server host
- Updated "was" copy for tutti, anibis ads

## 31.10.2024
- Update NDBX Lib to version 18.5.1

## 07.11.2024
- Fix scss for ndbx stepper component that interferes with target cases 

## 29.11.2024
- Always send lead mail to "leadswettbewerb@allianz.ch" if we are not in PROD stage
- Fix "Availbality" translations in emails
- Leadnavigator implementation
- Mailtemplate adjustments
- DB2 Payload adjustments

## 11.12.2024
- Debug db2, mail and lead-navigator data on success page if environment stage is not PROD.

## 16.01.2025
- ImageProfile Service activation (KB-Formular && LeadGenerator Link)
- LeadNavigator (Flux) Service activation
- New Campaign CPs for sources.json
- Comment field (for lead-mail)
- Spam Mail validator (deny for submission for particular set of email domains)
- Restrict allowed country codes for telephone number

## 22.02.2025
- Changes to LeadNavi/Flux Service due to PenTest-Changes of the LeadNavigator App (New POST instead of GET requests)


## 28.01.2025
- Updated LeadNavigator service implementation (POST)
- Updated sources.json for caspar
- Small fixes to build config
- Fix missing NDBX-Icons

## 28.01.2025 No-2
- Remove cp-filter for image-profile service for leadgenerator links
- Remove Header Name (bold) from Form

## 29.01.2025
- Add package release number to footer of leadform (hidden by color)

## 04.02.2025
- Update agency.json with new emails for GAs AS025, AS023
- Make release version no invisible

## 11.02.2025
- emergency cloudflare turnstile implementation

## 15.02.2025
- prevent rapid form submission
- updated turnstile logic
- loading indicator on submit
- expanded email blocklist
- zip code validation based on existing codes in agency.json

## 16.02.2025
- hidden honeytrap field
- uppercase email rejection
- spam analytics tracking


## 25.02.2025
Refactoring
- Removed unused code
- Tracking Service

## 26.02.2025
WIP
- Footer
- Layout fixes
- Cleanup i18n (de.json)
- Better i18n labelling
- Analytics Fixes (no default GA/Campaign if not set)
- Fallback GA (AS701 scs@allianz.ch)
