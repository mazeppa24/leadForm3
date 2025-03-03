import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading-service/loading.service';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NxSpinnerComponent } from '@aposin/ng-aquila/spinner';

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  imports: [NxSpinnerComponent, AsyncPipe],
  standalone: true,
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
  ) {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof NavigationStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
              this.loadingService.loadingOff();
            }
          }),
        )
        .subscribe();
    }
  }
}
