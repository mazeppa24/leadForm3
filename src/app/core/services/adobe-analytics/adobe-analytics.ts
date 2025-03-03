import {environment} from '../../../../environments/environment';
import {computed, inject, Injectable} from '@angular/core';
import {InitialAppParamsService} from "../../../modules/initial-app-params/initial-app-params.service";
import {DEFAULT_LANGUAGE} from "../../../constants";

@Injectable({
  providedIn: 'root',
})
export class AdobeAnalytics {
  constructor(
    private initialAppParamsService :InitialAppParamsService
  ) {
  }


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


  track(applicationData: Application, page: Page, event: Event, leads: Leads) {
    const application = this.buildApplicationObject(applicationData.virtualPageName);
    const pageTrackingData: PageTrackingData = {
      application,
      page,
      event,
      leads,
    };
    //@ts-ignore
    window.digitalDataLayer.push(pageTrackingData);
  }

  trackEvent(eventInfo: EventInfo, value: string = '', category: string = '') {
    const attributes = this.buildAttributes('', '', category, '', '', value);
    const event: Event = this.buildEventObject(eventInfo, attributes);

    const dataLayerEvent = {
      event,
    };
    //@ts-ignore
    window.digitalDataLayer.push(dataLayerEvent);
  }

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

    // // get the variables from query-params or session-storage
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (params['cp']) {
    //     this.appDataStore.campaign = params['cp'];
    //   }
    //   if (params['sc']) {
    //     this.appDataStore.source = params['sc'];
    //   }
    //   if (params['ga']) {
    //     this.appDataStore.ga = params['ga'];
    //   }
    //   if (params['we']) {
    //     this.appDataStore = params['we'];
    //   }
    // });

    // if (this.ga() !== '' && typeof this.ga() !== 'undefined' && this.ga() != null) {
    //   type = 'GeneralAgentur';
    // }
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
      currenURL: '',
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
