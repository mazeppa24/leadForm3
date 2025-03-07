import {Component, computed, effect, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InitialAppParamsService} from "../../core/services/initial-app-params/initial-app-params.service";
import {AdobeAnalytics, CONSULTATION_START, PAGE_VIEW} from "../../core/services/adobe-analytics/adobe-analytics";

/**
 * Component that shows an error page
 */
@Component({
  templateUrl: './error-page.component.html',
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({opacity: 0}),
  //       animate('3000ms', style({opacity: 1}))
  //     ])
  //   ])
  // ]
})
export class ErrorPageComponent implements OnInit {
  // Error Page Params
  errorCode: string | null = '';
  errorMessage: string | null = '';
  errorDetails: any;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private initialAppParamsService = inject(InitialAppParamsService);
  private adobeAnalytics = inject(AdobeAnalytics);


  showDebug = computed(() => {
    return (
      this.initialAppParamsService.initialAppParams()?.debug || false);
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      console.log('params', params);
      this.errorCode = params.get('code');
      this.errorMessage = params.get('message');
    })

    // track error page views
    effect(() => {
      this.adobeAnalytics.trackPageView('error', undefined, PAGE_VIEW);
    });

  }

  ngOnInit(): void {
    //this.errorCode = this.route.snapshot.paramMap.get('code');
    //this.errorMessage = this.route.snapshot.paramMap.get('message') || null;
    this.errorDetails = this.router.getCurrentNavigation()?.extras.state?.['errorDetails'];


    if (this.showDebug()) console.error('Exception occured: ', this.errorMessage);
    if (this.showDebug()) console.error('Exception occured details: ', this.errorDetails);
  }


}
