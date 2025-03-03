import {Injectable} from "@angular/core";
import {catchError, Observable, of, ReplaySubject, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageProfileService {

  private imageResultSubject = new ReplaySubject<ImageProfileResult>(1);

  constructor(private http: HttpClient) {
  }


  public fetchKbImageLink(kbEmail: string): Promise<ImageProfileResult> {

    let headers: HttpHeaders = new HttpHeaders()
      .set('X-Api-Key', environment.imageApiSecret)
      .set('Content-type', 'application/json');
    let params: HttpParams = new HttpParams()
      .set('email', kbEmail);
    this.fetchData(headers, params);
    return new Promise((resolve, reject) => {
      let observable: Observable<ImageProfileResult> = this.imageResultSubject;
      observable.pipe(catchError((err, _) => {
        this.handleError(err);
        return of(new ImageProfileResult());
      })).subscribe(result => {
        resolve(result);
      });
    });
  }

  private fetchData(headers: HttpHeaders, params: HttpParams) {
    this.http.get<ImageProfileResult>(environment.imageApi + params.get('email'), {
      headers: headers,
    }).pipe(catchError((err, _) => {
      this.imageResultSubject.error(err);
      return of()
    })).subscribe((result: ImageProfileResult) => {
      this.imageResultSubject.next(result)
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('A client side error occurred with Image-Profile-Service:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as  to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened with Image-Profile-Service; please try again later.'));
  }
}

export class ImageProfileResult {
  firstName: string;
  lastName: string;
  snumber: string;
  imageUrl: string;
  imageExists: boolean;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.snumber = '';
    this.imageUrl = '';
    this.imageExists = false;
  }
}

