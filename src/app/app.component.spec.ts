import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NxDatefieldModule, NxNativeDateModule} from '@aposin/ng-aquila/datefield';
import {NxInputModule} from '@aposin/ng-aquila/input';
import {NxGridModule} from '@aposin/ng-aquila/grid';
import {NxIconModule} from '@aposin/ng-aquila/icon';
import {NxProgressStepperModule} from '@aposin/ng-aquila/progress-stepper';
import {NxSliderModule} from '@aposin/ng-aquila/slider';
import {NxTableModule} from '@aposin/ng-aquila/table';
import {NxHeadlineModule} from '@aposin/ng-aquila/headline';
import {NxPopoverModule} from '@aposin/ng-aquila/popover';
import {NxButtonModule} from '@aposin/ng-aquila/button';
import {NxTabsModule} from '@aposin/ng-aquila/tabs';
import {NxSwitcherModule} from '@aposin/ng-aquila/switcher';
import {NxAccordionModule} from '@aposin/ng-aquila/accordion';
import {NxListModule} from '@aposin/ng-aquila/list';
import {NxCheckboxModule} from '@aposin/ng-aquila/checkbox';
import {NxNumberStepperModule} from '@aposin/ng-aquila/number-stepper';
import {NxTaglistModule} from '@aposin/ng-aquila/taglist';
import {NxRadioModule} from '@aposin/ng-aquila/radio-button';
import {NxDynamicTableModule} from '@aposin/ng-aquila/dynamic-table';
import {NxModalModule} from '@aposin/ng-aquila/modal';
import {NxRatingModule} from '@aposin/ng-aquila/rating';
import {NxCircleToggleModule} from '@aposin/ng-aquila/circle-toggle';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
// import {NxMessageModule} from "@aposin/ng-aquila/message";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NxInputModule,
        NxGridModule,
        NxPopoverModule,
        // NxMessageModule,
        NxIconModule,
        NxButtonModule,
        NxTabsModule,
        NxSwitcherModule,
        NxAccordionModule,
        NxCheckboxModule,
        NxListModule,
        NxNumberStepperModule,
        NxDatefieldModule,
        NxNativeDateModule,
        NxTaglistModule,
        NxTableModule,
        NxProgressStepperModule,
        NxRadioModule,
        NxDynamicTableModule,
        NxHeadlineModule,
        NxRatingModule,
        NxCircleToggleModule,
        NxSliderModule,
        NxModalModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sample-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ngx-ndbx Sample Pages');
  });
});
