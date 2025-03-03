import {HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LoadingService} from './loading.service';
import {Injectable} from '@angular/core';
import {finalize, Observable} from 'rxjs';

export const SkipLoading = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // prevent spinner from showing on certain requests
    if (req.context.get(SkipLoading) || req.url.includes('assets')) {
      // Pass the request directly to the next handler
      return next.handle(req);
    }
    // turn on the loading spinner
    this.loadingService.loadingOn();

    return next.handle(req).pipe(
      finalize(() => {
        // turn off the loading spinner
        this.loadingService.loadingOff();
      }),
    );
  }
}
