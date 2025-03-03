import { Injectable } from '@angular/core';
import { ErrorPageReason } from '../../../modules/error-page/error-page-reason';

@Injectable({
  providedIn: 'root',
})
export class AppDatastore {
  // Error Page Variables
  errorPageMessage: string;
  errorPageReason: ErrorPageReason;

  // Userlanguage for check in content
  public userlang: string;
  public userPlz: string;

  constructor() {
    this.errorPageMessage = '';
    this.errorPageReason = ErrorPageReason.GENERAL_EXCEPTION;
    this.userlang = '';
    this.userPlz = '';

  }
}
