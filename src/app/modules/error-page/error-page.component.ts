import { Component, OnInit } from '@angular/core';
import { ErrorPageReason } from './error-page-reason';
import { AppDatastore } from '../../core/services/app-store/app.datastore';

/**
 * Component that shows an error page
 */
@Component({
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent implements OnInit {
  // Error Page Params
  errorPageMessage: string = '';
  errorPageReason: ErrorPageReason = ErrorPageReason.GENERAL_EXCEPTION;
  errorPageTitle: string = '';
  errorPageText: string = '';

  /**
   * Init Component and get the App Data Store
   *
   * @param appDataStore - App storage service
   */
  constructor(private appDataStore: AppDatastore) {}

  ngOnInit(): void {
    // Get values from App Data Store
    this.errorPageMessage = this.appDataStore.errorPageMessage;
    this.errorPageReason = this.appDataStore.errorPageReason;

    // Set default values depending on the type
    switch (this.errorPageReason) {
      case ErrorPageReason.USER_NOT_AUTHORIZED:
        this.errorPageTitle = 'core.title.errorPage';
        this.errorPageText = 'core.message.errorRights';
        break;
      case ErrorPageReason.GENERAL_EXCEPTION:
        this.errorPageTitle = 'core.title.errorPage';
        this.errorPageText = 'core.text.errorPageInstruction';
        break;
      default:
        this.errorPageTitle = 'core.title.errorPage';
        this.errorPageText = '';
    }
  }
}
