import {environment} from '../../../../environments/environment';
import {computed, effect, inject, Injectable, signal, CreateEffectOptions} from '@angular/core';
import {InitialAppParamsService} from "../../../modules/initial-app-params/initial-app-params.service";
import {DEFAULT_LANGUAGE} from "../../../constants";
import {filter, take} from "rxjs";

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
    
    const application = this.buildApplicationObject(applicationData.virtualPageName);
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
    
    const attributes = this.buildAttributes('', '', category, '', '', value);
    const event: Event = this.buildEventObject(eventInfo, attributes);

    const dataLayerEvent = {
      event,
    };
    console.log('Executing Adobe Analytics trackEvent call', dataLayerEvent);
    //@ts-ignore
    window.digitalDataLayer.push(dataLayerEvent);
  }

  // Build methods
  // ---------------------------------------------------------------------------
  buildApplicationObject(virtualPageName: string): Application {
    
    if (virtualPageName && virtualPageName.startsWith('/')) {
      virtualPageName = virtualPageName.substring(1);
    }
    return {
      applicationId: environment.applicationId,
      applicationName: environment.applicationName,
      virtualPageName: virtualPageName,
    };
  }

  emptyLead(): Leads {
    return {
      intermediary: {
        name: '',
        type: '',
        werber: '',
      },
      origin: {
        origin: '',
      },
      campaign: {
        name: '',
        source: '',
      },
      user: {
        customerNumber: '',
      },
    };
  }

  buildLeadObject(sourceOrigin?: string): Leads {
    
    let origin: string = '';
    let type = '';
    let lsCustomerNumber: string = '';
    if (typeof sourceOrigin === 'string') {
      origin = sourceOrigin;
    }

    if (this.ga()) type = 'GeneralAgentur';

    lsCustomerNumber = localStorage.getItem('_azch_elvia_data_mm_nr') || '';

    return {
      origin: {
        origin: origin,
      },
      intermediary: {
        name: this.ga(),
        type: type,
        werber: this.werber(),
      },
      campaign: {
        name: this.campaign(),
        source: this.campaignSource(),
      },
      user: {
        customerNumber: lsCustomerNumber,
      },
    };
  }

  buildEventObject(eventInfo: EventInfo, attributes?: Attributes): Event {    
    let attribute: any;
    if (attributes?.componentPath !== undefined) {
      attribute = this.buildAttributes(
        attributes.currentURL,
        attributes.componentPath,
        attributes.elementName,
        attributes.linkText,
        attributes.targetURL,
        attributes.value,
      );
    } else {
      attribute = this.buildEmptyAttribute();
    }
    return {
      eventInfo: {
        eventAction: eventInfo.eventAction,
        eventName: eventInfo.eventName,
        eventType: eventInfo.eventType,
      },
      attributes: attribute,
    };
  }

  buildAttributes(
    currenURL: string,
    componentPath: string,
    elementName: string,
    linkText: string,
    targetURL: string,
    value: any,
  ): Attributes {
    return {
      currentURL: currenURL,
      componentPath: componentPath,
      elementName: elementName,
      linkText: linkText,
      targetURL: targetURL,
      value: value,
    };
  }

  buildEmptyAttribute() {
    return {
      currentURL: '',
      componentPath: '',
      elementName: '',
      linkText: '',
      targetURL: '',
      value: '',
    };
  }

  buildPageObject() {    
    return {
      pageInfo: {
        URLqueryParams: window.location.search,
        fullURL: window.location.href,
        hostname: window.location.hostname,
        language: this.language(),
        pageName: `${window.location.hostname}${window.location.pathname}`,
      },
    };
  }

  buildPageObjectCustom(pageName: string) {

    return {
      pageInfo: {
        URLqueryParams: window.location.search,
        fullURL: window.location.href,
        hostname: window.location.hostname,
        language: this.language(),
        pageName: `${window.location.hostname}${window.location.pathname}/` + pageName,
      },
    };
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
