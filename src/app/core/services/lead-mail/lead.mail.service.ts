import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadMailService {
  constructor(private http: HttpClient) {}

  sendEmail(mailData: MailData): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': environment.elcaMailApiSecret,
      'Content-Type': 'application/json',
    });
    return this.http
      .post<MailData>(environment.elcaMailApi, JSON.stringify(mailData), { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage =
      error.status === 0
        ? `An error occurred with MailAPI: ${error.error}`
        : `Backend returned code ${error.status}, body was: ${error.error}`;
    console.error(errorMessage);
    return throwError(() => new Error('Something bad happened with LeadMailAPI; please try again later.'));
  }
}

export interface ITranslations {
  label: string;
  value: string;
}

export interface MailData {
  leadApp: string;
  leadInternalRating: number;
  source_woher: string;
  source_was: string;
  source_formUrl: string;
  source_origin: string;
  source_campaign: string;
  source_source: string;
  source_category: string;
  leadComments: string;
  leadEnvironment: string;
  leadTS: string;
  mailSubject: string;
  mailRecipient: string;
  mailLanguage: string;
  customerAvailability: string;
  customerName: string;
  customerLanguage: string;
  customerZipCode: number;
  customerPhoneNumber: string;
  customerEmail: string;
  customerNumber: string;
  policyNumber: string;
  agent: string;
  sender: string;
  products: string[];
  attachments: string[];
  additionalInformation: { [key: string]: string };
  customer: boolean;
  agency: string;
}

export class MailDataClass implements MailData {
  leadApp!: string;
  leadInternalRating!: number;
  source_woher!: string;
  source_was!: string;
  source_formUrl!: string;
  source_origin!: string;
  source_campaign!: string;
  source_source!: string;
  source_category!: string;
  leadComments!: string;
  leadEnvironment!: string;
  leadTS!: string;
  mailSubject!: string;
  mailRecipient!: string;
  mailLanguage!: string;
  customerAvailability!: string;
  customerName!: string;
  customerLanguage!: string;
  customerZipCode!: number;
  customerPhoneNumber!: string;
  customerEmail!: string;
  customerNumber!: string;
  policyNumber!: string;
  agent!: string;
  sender!: string;
  products!: string[];
  attachments!: string[];
  additionalInformation!: { [key: string]: string };
  customer!: boolean;
  agency!: string;

  constructor(data: MailData) {
    Object.assign(this, data);
  }
}
