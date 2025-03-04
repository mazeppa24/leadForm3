import {environment} from '../../../../environments/environment';
import {computed, effect, inject, Injectable, signal, CreateEffectOptions} from '@angular/core';
import {InitialAppParamsService} from "../../../modules/initial-app-params/initial-app-params.service";
import {DEFAULT_LANGUAGE} from "../../../constants";
import {debounceTime, filter, take} from "rxjs";
import { UntypedFormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AdobeAnalytics {
  private initialAppParamsService = inject(InitialAppParamsService);
  private isReady = signal<boolean>(false);
  
  // Queue for tracking calls that are made before the service is ready
  private trackingQueue: Array<() => void> = [];
  
  // Flag to prevent processing the queue twice
  private queueProcessed = false;

  
  constructor() {
    // Check if InitialAppParamsService is already initialized
    if (this.initialAppParamsService.isInitialized()) {
      this.isReady.set(true);
      console.log('Adobe Analytics service is now ready (InitialAppParamsService was already initialized)');
      // Process any queued tracking calls immediately
      this.processQueue();
    }

    // Use effect to wait for the InitialAppParamsService to be initialized
    // Allow signal writes inside the effect
    const effectOptions: CreateEffectOptions = { allowSignalWrites: true };

    effect(() => {
      if (this.initialAppParamsService.isInitialized() && !this.isReady()) {
        this.isReady.set(true);
        console.log('Adobe Analytics service is now ready with initialized parameters');
        
        // Process any queued tracking calls
        this.processQueue();
      }
    }, effectOptions);
  }

  // Process any queued tracking calls
  private processQueue(): void {
    // If there are no items in the queue, just mark as processed and return
    if (this.trackingQueue.length === 0) {
      console.log('No queued Adobe Analytics tracking calls to process');
      this.queueProcessed = true;
      return;
    }
    
    // Prevent processing the queue multiple times
    if (this.queueProcessed) {
      console.log('Queue already processed, skipping');
      return;
    }
    
    console.log(`Processing ${this.trackingQueue.length} queued Adobe Analytics tracking calls`);
    
    // Make a copy of the queue before processing to avoid potential issues
    // with new items being added during processing
    const queueToProcess = [...this.trackingQueue];
    this.trackingQueue = [];
    
    // Execute all queued tracking calls
    queueToProcess.forEach(trackingCall => {
      try {
        trackingCall();
      } catch (error) {
        console.error('Error executing queued Adobe Analytics tracking call:', error);
      }
    });
    
    this.queueProcessed = true;
  }


  // Computed properties
  // ---------------------------------------------------------------------------
  decodedEmail = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.preselectedEmail || "",
  );

  isLeadGeneratorLink = computed(() => {
    return this.decodedEmail() !== "";
  });

  campaign = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.campaign || ""
    );
  });
  campaignSource = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.campaignSource || ""
    );
  });
  werber = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.werber || ""
    );
  });
  ga = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.agency?.id || ""
    );
  });
  language = computed(
    () =>
      this.initialAppParamsService.initialAppParams()?.language ||
      DEFAULT_LANGUAGE,
  );


  /**
   * Set up tracking for form field interactions
   * This helps track user behavior with the form
   */
  public setupFormFieldTracking(formGroup: UntypedFormGroup): void {
    // Track when fields are touched and then changed
    // This helps understand user interaction patterns
    const formControls = formGroup.controls;

    Object.keys(formControls).forEach(key => {
      if (key === 'bot') return; // Skip honeypot field

      const control = formControls[key as keyof typeof formControls];

      // Skip if the control doesn't exist
      if (!control) return;

      // Track when the field is first touched
      control.valueChanges.pipe(
        filter(() => control.dirty),
        debounceTime(100), // Wait for user to finish typing
        take(1) // Only track the first change after touch
      ).subscribe(value => {
        // Don't track empty values or default values
        if (!value || (key === 'phone' && value === '+41')) return;

        this.trackFieldInteraction(key);
      });

      //TODO: Initial validation errors (blur without typing) are not tracked
      // Track validation errors when the user leaves a field
      control.statusChanges.pipe(
        filter(() => control.invalid),
        debounceTime(1500),
      ).subscribe(() => {
        if (control.errors) {
          this.trackFormValidationError(key, control.errors);
        }
      });
    });
  }

  /**
   * Track form validation errors
   * @param fieldName The name of the field with the error
   * @param errors The validation errors
   */
  private trackFormValidationError(fieldName: string, errors: ValidationErrors): void {
    // Get the first error type
    const errorType = Object.keys(errors)[0];

    console.log(`Tracking validation error: ${fieldName} - ${errorType}`);

    //TODO: Create Trigger Constant
    this.trackEvent(
      {
        eventAction: 'form-validation-error',
        eventName: 'lead-form',
        eventType: 'error'
      },
      errorType, // value
      fieldName // category
    );
  }

  /**
   * Track a form field interaction
   * @param fieldName The name of the field that was interacted with
   */
  private trackFieldInteraction(fieldName: string): void {
    console.log(`Tracking field interaction: ${fieldName}`);

    //TODO: Create Trigger Constant
    this.trackEvent(
      {
        eventAction: 'form-field-interaction',
        eventName: 'lead-form',
        eventType: 'interaction'
      },
      '', // value
      fieldName // category
    );
  }


  // Tracking methods
  // ---------------------------------------------------------------------------

  // track page view
  track(applicationData: Application, page: Page, event: Event, leads: Leads) {
    // If not ready, queue the tracking call for later
    if (!this.isReady()) {
      console.log('Queueing Adobe Analytics track call until initialization is complete');
      this.trackingQueue.push(() => this.track(applicationData, page, event, leads));
      
      // If the queue has been processed but we're still getting calls,
      // we need to process this call immediately when the service becomes ready
      if (this.queueProcessed) {
        console.log('Queue was already processed, processing this call immediately when ready');
        this.queueProcessed = false;
      }
      return;
    }
    
    const application = new ApplicationBuilder()
      .withVirtualPageName(applicationData.virtualPageName)
      .build();
      
    const pageTrackingData: PageTrackingData = {
      application,
      page,
      event,
      leads,
    };
    console.log('Executing Adobe Analytics track call', pageTrackingData);
    //@ts-ignore
    window.digitalDataLayer.push(pageTrackingData);
  }

  // Simplified track method using builders
  trackPageView(virtualPageName: string, customPageName?: string, eventInfo?: EventInfo) {
    // If not ready, queue the tracking call for later
    if (!this.isReady()) {
      console.log('Queueing Adobe Analytics trackPageView call until initialization is complete');
      this.trackingQueue.push(() => this.trackPageView(virtualPageName, customPageName, eventInfo));
      
      if (this.queueProcessed) {
        console.log('Queue was already processed, processing this call immediately when ready');
        this.queueProcessed = false;
      }
      return;
    }
    
    const application = new ApplicationBuilder()
      .withVirtualPageName(virtualPageName)
      .build();
      
    const pageBuilder = new PageBuilder(this);
    if (customPageName) {
      pageBuilder.withCustomPageName(customPageName);
    }
    const page = pageBuilder.build();
    
    const defaultEventInfo: EventInfo = eventInfo || PAGE_VIEW;
    const event = new EventBuilder()
      .withEventInfo(defaultEventInfo)
      .withAttributes(new AttributesBuilder().build())
      .build();
      
    const leads = new LeadsBuilder(this)
      .withDefaultValues()
      .build();
      
    const pageTrackingData: PageTrackingData = {
      application,
      page,
      event,
      leads,
    };
    
    console.log('Executing Adobe Analytics trackPageView call', pageTrackingData);
    //@ts-ignore
    window.digitalDataLayer.push(pageTrackingData);
  }

  // track event  
  trackEvent(eventInfo: EventInfo, value: string = '', category: string = '') {
    // If not ready, queue the tracking call for later
    if (!this.isReady()) {
      console.log('Queueing Adobe Analytics trackEvent call until initialization is complete');
      this.trackingQueue.push(() => this.trackEvent(eventInfo, value, category));
      
      // If the queue has been processed but we're still getting calls,
      // we need to process this call immediately when the service becomes ready
      if (this.queueProcessed) {
        console.log('Queue was already processed, processing this call immediately when ready');
        this.queueProcessed = false;
      }
      return;
    }
    
    const event = new EventBuilder()
      .withEventInfo(eventInfo)
      .withSimpleAttributes(category, value)
      .build();

    const dataLayerEvent = {
      event,
    };
    console.log('Executing Adobe Analytics trackEvent call', dataLayerEvent);
    //@ts-ignore
    window.digitalDataLayer.push(dataLayerEvent);
  }

  // Example of using the builder pattern for a complex tracking scenario
  trackComplexEvent(
    virtualPageName: string, 
    eventInfo: EventInfo, 
    customAttributes?: Partial<Attributes>,
    customLeadInfo?: {
      origin?: string;
      intermediaryName?: string;
      campaignName?: string;
      campaignSource?: string;
      customerNumber?: string;
    }
  ) {
    // If not ready, queue the tracking call for later
    if (!this.isReady()) {
      console.log('Queueing Adobe Analytics trackComplexEvent call until initialization is complete');
      this.trackingQueue.push(() => this.trackComplexEvent(
        virtualPageName, 
        eventInfo, 
        customAttributes, 
        customLeadInfo
      ));
      
      if (this.queueProcessed) {
        console.log('Queue was already processed, processing this call immediately when ready');
        this.queueProcessed = false;
      }
      return;
    }
    
    // Build application object
    const application = new ApplicationBuilder()
      .withVirtualPageName(virtualPageName)
      .build();
    
    // Build page object
    const page = new PageBuilder(this).build();
    
    // Build event object with custom attributes if provided
    const eventBuilder = new EventBuilder()
      .withEventInfo(eventInfo);
      
    if (customAttributes) {
      const attributesBuilder = new AttributesBuilder();
      
      if (customAttributes.currentURL) attributesBuilder.withCurrentURL(customAttributes.currentURL);
      if (customAttributes.componentPath) attributesBuilder.withComponentPath(customAttributes.componentPath);
      if (customAttributes.elementName) attributesBuilder.withElementName(customAttributes.elementName);
      if (customAttributes.linkText) attributesBuilder.withLinkText(customAttributes.linkText);
      if (customAttributes.targetURL) attributesBuilder.withTargetURL(customAttributes.targetURL);
      if (customAttributes.value) attributesBuilder.withValue(customAttributes.value);
      
      eventBuilder.withAttributes(attributesBuilder.build());
    }
    
    const event = eventBuilder.build();
    
    // Build leads object with custom lead info if provided
    const leadsBuilder = new LeadsBuilder(this)
      .withDefaultValues();
      
    if (customLeadInfo) {
      if (customLeadInfo.origin) leadsBuilder.withOrigin(customLeadInfo.origin);
      if (customLeadInfo.intermediaryName) {
        leadsBuilder.withIntermediary(
          customLeadInfo.intermediaryName,
          customLeadInfo.intermediaryName ? 'GeneralAgentur' : '',
          this.werber()
        );
      }
      if (customLeadInfo.campaignName || customLeadInfo.campaignSource) {
        leadsBuilder.withCampaign(
          customLeadInfo.campaignName || this.campaign(),
          customLeadInfo.campaignSource || this.campaignSource()
        );
      }
      if (customLeadInfo.customerNumber) {
        leadsBuilder.withUser(customLeadInfo.customerNumber);
      }
    }
    
    const leads = leadsBuilder.build();
    
    // Create the final tracking data object
    const pageTrackingData: PageTrackingData = {
      application,
      page,
      event,
      leads,
    };
    
    console.log('Executing Adobe Analytics trackComplexEvent call', pageTrackingData);
    //@ts-ignore
    window.digitalDataLayer.push(pageTrackingData);
  }

  // Build methods (keeping for backward compatibility)
  // ---------------------------------------------------------------------------
  buildApplicationObject(virtualPageName: string): Application {
    return new ApplicationBuilder()
      .withVirtualPageName(virtualPageName)
      .build();
  }

  emptyLead(): Leads {
    return new LeadsBuilder(this).build();
  }

  buildLeadObject(sourceOrigin?: string): Leads {
    const builder = new LeadsBuilder(this)
      .withDefaultValues();
      
    if (sourceOrigin) {
      builder.withOrigin(sourceOrigin);
    }
    
    return builder.build();
  }

  buildEventObject(eventInfo: EventInfo, attributes?: Attributes): Event {    
    const builder = new EventBuilder()
      .withEventInfo(eventInfo);
      
    if (attributes?.componentPath !== undefined) {
      builder.withAttributes(attributes);
    }
    
    return builder.build();
  }

  buildAttributes(
    currenURL: string,
    componentPath: string,
    elementName: string,
    linkText: string,
    targetURL: string,
    value: any,
  ): Attributes {
    return new AttributesBuilder()
      .withCurrentURL(currenURL)
      .withComponentPath(componentPath)
      .withElementName(elementName)
      .withLinkText(linkText)
      .withTargetURL(targetURL)
      .withValue(value)
      .build();
  }

  buildEmptyAttribute(): Attributes {
    return new AttributesBuilder().build();
  }

  buildPageObject(): Page {    
    return new PageBuilder(this).build();
  }

  buildPageObjectCustom(pageName: string): Page {
    return new PageBuilder(this)
      .withCustomPageName(pageName)
      .build();
  }
}

// Data Layer types
// ---------------------------------------------------------------------------
interface Page {
  pageInfo: {
    URLqueryParams: string;
    fullURL: string;
    hostname: string;
    language: string;
    pageName: string;
  };
}

export interface PageTrackingData {
  application: Application;
  page: Page;
  event: Event;
  leads: Leads;
}

export interface Application {
  applicationId: string;
  applicationName: string;
  virtualPageName: string;
}

export interface Leads {
  origin: Origin;
  intermediary: Intermediary;
  campaign: Campaign;
  user: UserLead;
}

export interface UserLead {
  customerNumber: string;
}

export interface User {
  residencePostalCode: string;
}

export type Origin = {
  origin: string;
};

export type Intermediary = {
  name: string;
  type: string;
  werber: string;
};

export class Campaign {
  name: string = '';
  source: string = '';
}

export interface Event {
  eventInfo: EventInfo;
  attributes: Attributes;
}

export interface EventInfo {
  eventAction: string;
  eventName: string;
  eventType: string;
}

export interface Attributes {
  currentURL: string;
  componentPath: string;
  elementName: string;
  linkText: string;
  targetURL: string;
  value: string;
}

// Event types
// ---------------------------------------------------------------------------
export const PAGE_VIEW = {
  eventAction: 'page load',
  eventName: 'generic',
  eventType: 'page',
};

export const CONSULTATION_START = {
  eventAction: 'DCR: Consultation Start',
  eventName: '',
  eventType: 'trigger',
};
export const CONSULTATION_COMPLETE = {
  eventAction: 'DCR: Consultation Complete',
  eventName: '',
  eventType: 'trigger',
};

export const TRIGGER_START = {
  eventAction: 'interactive-asset-start',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_COMPLETE = {
  eventAction: 'interactive-asset-complete',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_DOWNLOAD = {
  eventAction: 'lead-link-download',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_DELETE = {
  eventAction: 'lead-link-delete',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_COPY = {
  eventAction: 'lead-link-copy',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_EXTERNAL_LINK = {
  eventAction: 'external link',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_MAIL_CONTACT = {
  eventAction: 'contact',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_LANGUAGE_SWITCH = {
  eventAction: 'lead-language-switch',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_SPAM_EMAIL = {
  eventAction: 'spam-email',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_SPAM_HONEYPOT = {
  eventAction: 'spam-honeypot',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_SPAM_RAPID_SUBMISSION = {
  eventAction: 'spam-rapid-submission',
  eventName: '',
  eventType: 'trigger',
};
export const TRIGGER_ERROR_FORM_SUBMIT = {
  eventAction: 'form-submit-error',
  eventName: '',
  eventType: 'trigger',
};

// Builder classes for tracking objects
// ---------------------------------------------------------------------------
export class ApplicationBuilder {
  private application: Application = {
    applicationId: '',
    applicationName: '',
    virtualPageName: '',
  };

  constructor() {
    // Set default values from environment
    this.application.applicationId = environment.applicationId;
    this.application.applicationName = environment.applicationName;
  }

  withVirtualPageName(virtualPageName: string): ApplicationBuilder {
    if (virtualPageName && virtualPageName.startsWith('/')) {
      virtualPageName = virtualPageName.substring(1);
    }
    this.application.virtualPageName = virtualPageName;
    return this;
  }

  build(): Application {
    return { ...this.application };
  }
}

export class PageBuilder {
  private page: Page = {
    pageInfo: {
      URLqueryParams: '',
      fullURL: '',
      hostname: '',
      language: '',
      pageName: '',
    }
  };

  constructor(private adobeAnalytics: AdobeAnalytics) {
    // Set default values from window location
    this.page.pageInfo.URLqueryParams = window.location.search;
    this.page.pageInfo.fullURL = window.location.href;
    this.page.pageInfo.hostname = window.location.hostname;
    this.page.pageInfo.language = this.adobeAnalytics.language();
    this.page.pageInfo.pageName = `${window.location.hostname}${window.location.pathname}`;
  }

  withCustomPageName(pageName: string): PageBuilder {
    this.page.pageInfo.pageName = `${window.location.hostname}${window.location.pathname}/` + pageName;
    return this;
  }

  withLanguage(language: string): PageBuilder {
    this.page.pageInfo.language = language;
    return this;
  }

  build(): Page {
    return { ...this.page };
  }
}

export class EventBuilder {
  private event: Event = {
    eventInfo: {
      eventAction: '',
      eventName: '',
      eventType: '',
    },
    attributes: {
      currentURL: '',
      componentPath: '',
      elementName: '',
      linkText: '',
      targetURL: '',
      value: '',
    }
  };

  constructor() {}

  withEventInfo(eventInfo: EventInfo): EventBuilder {
    this.event.eventInfo = { ...eventInfo };
    return this;
  }

  withAttributes(attributes: Attributes): EventBuilder {
    this.event.attributes = { ...attributes };
    return this;
  }

  withSimpleAttributes(category: string = '', value: string = ''): EventBuilder {
    this.event.attributes = {
      currentURL: '',
      componentPath: '',
      elementName: category,
      linkText: '',
      targetURL: '',
      value: value,
    };
    return this;
  }

  build(): Event {
    return { ...this.event };
  }
}

export class AttributesBuilder {
  private attributes: Attributes = {
    currentURL: '',
    componentPath: '',
    elementName: '',
    linkText: '',
    targetURL: '',
    value: '',
  };

  constructor() {}

  withCurrentURL(url: string): AttributesBuilder {
    this.attributes.currentURL = url;
    return this;
  }

  withComponentPath(path: string): AttributesBuilder {
    this.attributes.componentPath = path;
    return this;
  }

  withElementName(name: string): AttributesBuilder {
    this.attributes.elementName = name;
    return this;
  }

  withLinkText(text: string): AttributesBuilder {
    this.attributes.linkText = text;
    return this;
  }

  withTargetURL(url: string): AttributesBuilder {
    this.attributes.targetURL = url;
    return this;
  }

  withValue(value: string): AttributesBuilder {
    this.attributes.value = value;
    return this;
  }

  build(): Attributes {
    return { ...this.attributes };
  }
}

export class LeadsBuilder {
  private leads: Leads = {
    origin: {
      origin: '',
    },
    intermediary: {
      name: '',
      type: '',
      werber: '',
    },
    campaign: {
      name: '',
      source: '',
    },
    user: {
      customerNumber: '',
    },
  };

  constructor(private adobeAnalytics: AdobeAnalytics) {}

  withOrigin(origin: string): LeadsBuilder {
    this.leads.origin.origin = origin;
    return this;
  }

  withIntermediary(name: string, type: string, werber: string): LeadsBuilder {
    this.leads.intermediary.name = name;
    this.leads.intermediary.type = type;
    this.leads.intermediary.werber = werber;
    return this;
  }

  withCampaign(name: string, source: string): LeadsBuilder {
    this.leads.campaign.name = name;
    this.leads.campaign.source = source;
    return this;
  }

  withUser(customerNumber: string): LeadsBuilder {
    this.leads.user.customerNumber = customerNumber;
    return this;
  }

  withDefaultValues(): LeadsBuilder {
    const lsCustomerNumber = localStorage.getItem('_azch_elvia_data_mm_nr') || '';
    let type = this.adobeAnalytics.ga() ? 'GeneralAgentur' : '';

    this.leads.intermediary.name = this.adobeAnalytics.ga();
    this.leads.intermediary.type = type;
    this.leads.intermediary.werber = this.adobeAnalytics.werber();
    this.leads.campaign.name = this.adobeAnalytics.campaign();
    this.leads.campaign.source = this.adobeAnalytics.campaignSource();
    this.leads.user.customerNumber = lsCustomerNumber;
    
    return this;
  }

  build(): Leads {
    return { ...this.leads };
  }
}
