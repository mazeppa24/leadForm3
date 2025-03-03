import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, ReplaySubject, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class LeadNavigatorService {

  private validationResultSubject = new ReplaySubject<ValidationResult>(1);

  private static CONTACT_COORDINATES = 'contact-coordinates';
  private static CUSTOMER_NUMBER = 'customer-number';

  constructor(private http: HttpClient) {
  }


  public validateByEmailPhoneZip(email: string, zip: string, phone: string): Promise<ValidationResult> {
    let headers: HttpHeaders = new HttpHeaders()
      .set('X-Api-Key', environment.leadNavApiSecret)
      .set('Content-type', 'application/json');

    let request = new ValidationRequest()
    request.email = email;
    request.zipCode = zip;
    request.phoneNumber = phone;

    this.fetchData(LeadNavigatorService.CONTACT_COORDINATES, headers, request);
    return new Promise((resolve, reject) => {
      let observable: Observable<ValidationResult> = this.validationResultSubject;
      observable.pipe(catchError((err, _) => {
        this.handleError(err);
        // we provide default values in case we have an exception or no result from the backend
        let errorResult = new ValidationResult();
        errorResult.routingEmail = "leadswettbewerb@allianz.ch";
        errorResult.ga = "undefined";
        return of(new ValidationResult());
      })).subscribe(result => {
        if (result) {
          resolve(result);
        }
      });
    });
  }


  public validateByCustomerNumber(customerNumber: string): Promise<ValidationResult> {
    let headers: HttpHeaders = new HttpHeaders()
      .set('X-Api-Key', environment.leadNavApiSecret)
      .set('Content-type', 'application/json');
    let params: HttpParams = new HttpParams()
      .set('customerNumber', customerNumber);

    let request = {
      'customerNumber': customerNumber
    }
    this.fetchData(LeadNavigatorService.CUSTOMER_NUMBER, headers, request);
    return new Promise((resolve, reject) => {
      let observable: Observable<ValidationResult> = this.validationResultSubject;
      observable.pipe(catchError((err, _) => {
        this.handleError(err);
        // we provide default values in case we have an exception or no result from the backend
        let errorResult = new ValidationResult();
        errorResult.routingEmail = "leadswettbewerb@allianz.ch";
        errorResult.ga = "undefined";
        return of(new ValidationResult());
      })).subscribe(result => {
        if (result) {
          resolve(result);
        }
      });
    });
  }

  private fetchData(operation: String, headers: HttpHeaders, request: any) {
    this.http.post<ValidationResult>(environment.leadNavApi + operation, request, {headers: headers}
    ).pipe(catchError((err, _) => {
      this.validationResultSubject.error(err);
      return of()
    })).subscribe((validationResult: ValidationResult) => {
      this.validationResultSubject.next(validationResult)
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A client side error occurred with LeadNavigator:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened with LeadNavigator; please try again later.'));
  }
}

export class ValidationResult {
  customerAgentEmail: string;
  customerAgentNumber: string;
  customerLanguage: string;
  customerNumber: string;
  ga: string;
  isCustomer: string;
  routingEmail: string;

  constructor() {
    this.customerAgentEmail = '';
    this.customerAgentNumber = '';
    this.customerLanguage = '';
    this.customerNumber = '';
    this.ga = '';
    this.isCustomer = '';
    this.routingEmail = '';
  }
}

export class ValidationRequest {
  email: string;
  zipCode: string;
  phoneNumber: string;

  constructor() {
    this.email = '';
    this.phoneNumber = '';
    this.zipCode = '';
  }
}
export class LeadData implements ILeadData {
  firstLastName: string;
  plz: number;
  phoneNumber: string;
  email: string;
  hnumber: string;
  policyNumber: string;
  agent: string;
  sender: string;
  origin: string;
  agency: string;
  customerType: string;
  applicationName: string;
  campaignSource: string;
  campaign: string;
  category: string;

  constructor(firstLastName: string,
              plz: number,
              phoneNumber: string,
              email: string,
              hnumber: string,
              policyNumber: string,
              agent: string,
              sender: string, //From LeadForwarding App -> "Sender" Freetext field who submitted the lead
              origin: string,
              agency: string,
              customerType: string,
              applicationName: string,
              campaignSource: string,
              campaign: string,
              category: string) {
    this.firstLastName = firstLastName;
    this.plz = plz;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.hnumber = hnumber;
    this.policyNumber = policyNumber;
    this.agent = agent;
    this.sender = sender;
    this.origin = origin;
    this.agency = agency;
    this.customerType = customerType;
    this.applicationName = applicationName;
    this.campaignSource = campaignSource;
    this.campaign = campaign;
    this.category = category;
  }
}

export interface ILeadData {
  firstLastName: string,
  plz: number,
  phoneNumber: string,
  email: string,
  hnumber: string,
  policyNumber: string,
  agent: string,
  sender: string,
  origin: string,
  agency: string,
  customerType: string,
  applicationName: string,
  campaignSource: string,
  campaign: string,
  category: string,
}
