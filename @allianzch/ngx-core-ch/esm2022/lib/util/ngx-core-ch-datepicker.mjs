import { NxDatepickerIntl } from '@aposin/ng-aquila/datefield';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class NgxCoreChDatepicker extends NxDatepickerIntl {
    constructor(translateService) {
        super();
        this.translateService = translateService;
        this.setDatePickerLabels('core.datepicker');
    }
    setDatePickerLabels(labelName) {
        this.translateService.stream(labelName).subscribe((result) => {
            this.calendarLabel = result.calendarLabel; /** used by screen readers */
            this.openCalendarLabel = result.openCalendarLabel; /** used by screen readers */
            this.prevMonthLabel = result.prevMonthLabel; /** used by screen readers */
            this.nextMonthLabel = result.nextMonthLabel; /** used by screen readers */
            this.prevYearLabel = result.prevYearLabel; /** used by screen readers */
            this.nextYearLabel = result.nextYearLabel; /** used by screen readers */
            this.prevMultiYearLabel = result.prevMultiYearLabel; /** used by screen readers */
            this.nextMultiYearLabel = result.nextMultiYearLabel; /** used by screen readers */
            this.switchToMonthViewLabel = result.switchToMonthViewLabel;
            this.switchToMultiYearViewLabel = result.switchToMultiYearViewLabel;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChDatepicker, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.TranslateService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvcmUtY2gtZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FsbGlhbnpjaC9uZ3gtY29yZS1jaC9zcmMvbGliL3V0aWwvbmd4LWNvcmUtY2gtZGF0ZXBpY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUN2RCxZQUFvQixnQkFBa0M7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRXBELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxTQUFpQjtRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQTJCLEVBQUUsRUFBRTtZQUNoRixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyw2QkFBNkI7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLDZCQUE2QjtZQUNoRixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyw2QkFBNkI7WUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsNkJBQTZCO1lBQzFFLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLDZCQUE2QjtZQUN4RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyw2QkFBNkI7WUFDeEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLDZCQUE2QjtZQUNsRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsNkJBQTZCO1lBQ2xGLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDNUQsSUFBSSxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBbkJVLG1CQUFtQjtrSEFBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnhEYXRlcGlja2VySW50bCB9IGZyb20gJ0BhcG9zaW4vbmctYXF1aWxhL2RhdGVmaWVsZCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hDb3JlQ2hEYXRlcGlja2VyIGV4dGVuZHMgTnhEYXRlcGlja2VySW50bCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXREYXRlUGlja2VyTGFiZWxzKCdjb3JlLmRhdGVwaWNrZXInKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGF0ZVBpY2tlckxhYmVscyhsYWJlbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5zdHJlYW0obGFiZWxOYW1lKS5zdWJzY3JpYmUoKHJlc3VsdDogTmd4Q29yZUNoRGF0ZXBpY2tlcikgPT4ge1xuICAgICAgdGhpcy5jYWxlbmRhckxhYmVsID0gcmVzdWx0LmNhbGVuZGFyTGFiZWw7IC8qKiB1c2VkIGJ5IHNjcmVlbiByZWFkZXJzICovXG4gICAgICB0aGlzLm9wZW5DYWxlbmRhckxhYmVsID0gcmVzdWx0Lm9wZW5DYWxlbmRhckxhYmVsOyAvKiogdXNlZCBieSBzY3JlZW4gcmVhZGVycyAqL1xuICAgICAgdGhpcy5wcmV2TW9udGhMYWJlbCA9IHJlc3VsdC5wcmV2TW9udGhMYWJlbDsgLyoqIHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMgKi9cbiAgICAgIHRoaXMubmV4dE1vbnRoTGFiZWwgPSByZXN1bHQubmV4dE1vbnRoTGFiZWw7IC8qKiB1c2VkIGJ5IHNjcmVlbiByZWFkZXJzICovXG4gICAgICB0aGlzLnByZXZZZWFyTGFiZWwgPSByZXN1bHQucHJldlllYXJMYWJlbDsgLyoqIHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMgKi9cbiAgICAgIHRoaXMubmV4dFllYXJMYWJlbCA9IHJlc3VsdC5uZXh0WWVhckxhYmVsOyAvKiogdXNlZCBieSBzY3JlZW4gcmVhZGVycyAqL1xuICAgICAgdGhpcy5wcmV2TXVsdGlZZWFyTGFiZWwgPSByZXN1bHQucHJldk11bHRpWWVhckxhYmVsOyAvKiogdXNlZCBieSBzY3JlZW4gcmVhZGVycyAqL1xuICAgICAgdGhpcy5uZXh0TXVsdGlZZWFyTGFiZWwgPSByZXN1bHQubmV4dE11bHRpWWVhckxhYmVsOyAvKiogdXNlZCBieSBzY3JlZW4gcmVhZGVycyAqL1xuICAgICAgdGhpcy5zd2l0Y2hUb01vbnRoVmlld0xhYmVsID0gcmVzdWx0LnN3aXRjaFRvTW9udGhWaWV3TGFiZWw7XG4gICAgICB0aGlzLnN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsID0gcmVzdWx0LnN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsO1xuICAgIH0pO1xuICB9XG59XG4iXX0=