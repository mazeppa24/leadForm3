import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../app-config/app-config.service";
import * as i2 from "@aposin/ng-aquila/copytext";
import * as i3 from "@aposin/ng-aquila/grid";
import * as i4 from "@aposin/ng-aquila/headline";
import * as i5 from "@aposin/ng-aquila/icon";
import * as i6 from "@aposin/ng-aquila/link";
/**
 * Component that shows an error page
 */
export class NgxCoreChErrorPageComponent {
    constructor(appConfigService) {
        this.appConfigService = appConfigService;
        this.errorPageTitle = '';
        this.errorPageText = '';
        this.message = '';
        this.applicationReloadLabel = '';
    }
    getWindowLocationOrigin() {
        return window.location.origin + this.appConfigService.baseUrl;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageComponent, deps: [{ token: i1.AppConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: NgxCoreChErrorPageComponent, selector: "ngx-core-ch-error-page", inputs: { errorPageTitle: "errorPageTitle", errorPageText: "errorPageText", message: "message", applicationReloadLabel: "applicationReloadLabel" }, ngImport: i0, template: "<div nxLayout=\"grid maxwidth\" class=\"nx-margin-top-l margin-box\">\n  <div nxRow rowJustify=\"center,center,center,center\">\n    <div nxCol=\"1\">\n      <nx-icon name=\"exclamation-triangle\" size=\"l\" class=\"error\"></nx-icon>\n    </div>\n    <div nxCol=\"11\">\n      <h1 nxHeadline=\"subsection-small\">{{errorPageTitle}}</h1>\n      <p nxCopytext=\"large\">{{errorPageText}}</p>\n      <p nxCopytext=\"normal\">{{message}}</p>\n      <nx-link>\n        <a [href]=\"getWindowLocationOrigin()\">{{applicationReloadLabel}}</a>\n      </nx-link>\n    </div>\n  </div>\n</div>\n", styles: [".error{color:var(--message-error-icon-color);float:right}\n"], dependencies: [{ kind: "component", type: i2.NxCopytextComponent, selector: "[nxCopytext]", inputs: ["nxCopytext"] }, { kind: "component", type: i3.NxLayoutComponent, selector: "[nxLayout]", inputs: ["containerQuery", "nxLayout"] }, { kind: "component", type: i3.NxRowComponent, selector: "[nxRow]", inputs: ["class", "nxRow", "rowJustify", "rowAlignContent", "rowAlignItems", "rowWrap"] }, { kind: "component", type: i3.NxColComponent, selector: "[nxCol]", inputs: ["class", "nxCol", "colOffset", "alignSelf", "colOrder"] }, { kind: "component", type: i4.NxHeadlineComponent, selector: "[nxHeadline]", inputs: ["nxHeadline", "size", "negative"] }, { kind: "component", type: i5.NxIconComponent, selector: "nx-icon", inputs: ["name", "outline", "fill", "size", "font"] }, { kind: "component", type: i6.NxLinkComponent, selector: "nx-link", inputs: ["nxStyle", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: NgxCoreChErrorPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-core-ch-error-page', template: "<div nxLayout=\"grid maxwidth\" class=\"nx-margin-top-l margin-box\">\n  <div nxRow rowJustify=\"center,center,center,center\">\n    <div nxCol=\"1\">\n      <nx-icon name=\"exclamation-triangle\" size=\"l\" class=\"error\"></nx-icon>\n    </div>\n    <div nxCol=\"11\">\n      <h1 nxHeadline=\"subsection-small\">{{errorPageTitle}}</h1>\n      <p nxCopytext=\"large\">{{errorPageText}}</p>\n      <p nxCopytext=\"normal\">{{message}}</p>\n      <nx-link>\n        <a [href]=\"getWindowLocationOrigin()\">{{applicationReloadLabel}}</a>\n      </nx-link>\n    </div>\n  </div>\n</div>\n", styles: [".error{color:var(--message-error-icon-color);float:right}\n"] }]
        }], ctorParameters: () => [{ type: i1.AppConfigService }], propDecorators: { errorPageTitle: [{
                type: Input
            }], errorPageText: [{
                type: Input
            }], message: [{
                type: Input
            }], applicationReloadLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbGxpYW56Y2gvbmd4LWNvcmUtY2gvc3JjL2xpYi9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFHakQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMkJBQTJCO0lBTXRDLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTDdDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7SUFFb0IsQ0FBQztJQUUxRCx1QkFBdUI7UUFDckIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0lBQ2hFLENBQUM7OEdBVlUsMkJBQTJCO2tHQUEzQiwyQkFBMkIsa05DYnhDLDJrQkFlQTs7MkZERmEsMkJBQTJCO2tCQVB2QyxTQUFTOytCQUVFLHdCQUF3QjtxRkFNekIsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwLWNvbmZpZy9hcHAtY29uZmlnLnNlcnZpY2UnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IHNob3dzIGFuIGVycm9yIHBhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIC8qZXNsaW50LWRpc2FibGUgKi9cbiAgc2VsZWN0b3I6ICduZ3gtY29yZS1jaC1lcnJvci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIC8qZXNsaW50LWVuYWJsZSAqL1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb3JlQ2hFcnJvclBhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBlcnJvclBhZ2VUaXRsZSA9ICcnO1xuICBASW5wdXQoKSBlcnJvclBhZ2VUZXh0ID0gJyc7XG4gIEBJbnB1dCgpIG1lc3NhZ2UgPSAnJztcbiAgQElucHV0KCkgYXBwbGljYXRpb25SZWxvYWRMYWJlbCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ29uZmlnU2VydmljZTogQXBwQ29uZmlnU2VydmljZSkge31cblxuICBnZXRXaW5kb3dMb2NhdGlvbk9yaWdpbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgdGhpcy5hcHBDb25maWdTZXJ2aWNlLmJhc2VVcmw7XG4gIH1cbn1cbiIsIjxkaXYgbnhMYXlvdXQ9XCJncmlkIG1heHdpZHRoXCIgY2xhc3M9XCJueC1tYXJnaW4tdG9wLWwgbWFyZ2luLWJveFwiPlxuICA8ZGl2IG54Um93IHJvd0p1c3RpZnk9XCJjZW50ZXIsY2VudGVyLGNlbnRlcixjZW50ZXJcIj5cbiAgICA8ZGl2IG54Q29sPVwiMVwiPlxuICAgICAgPG54LWljb24gbmFtZT1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgc2l6ZT1cImxcIiBjbGFzcz1cImVycm9yXCI+PC9ueC1pY29uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgbnhDb2w9XCIxMVwiPlxuICAgICAgPGgxIG54SGVhZGxpbmU9XCJzdWJzZWN0aW9uLXNtYWxsXCI+e3tlcnJvclBhZ2VUaXRsZX19PC9oMT5cbiAgICAgIDxwIG54Q29weXRleHQ9XCJsYXJnZVwiPnt7ZXJyb3JQYWdlVGV4dH19PC9wPlxuICAgICAgPHAgbnhDb3B5dGV4dD1cIm5vcm1hbFwiPnt7bWVzc2FnZX19PC9wPlxuICAgICAgPG54LWxpbms+XG4gICAgICAgIDxhIFtocmVmXT1cImdldFdpbmRvd0xvY2F0aW9uT3JpZ2luKClcIj57e2FwcGxpY2F0aW9uUmVsb2FkTGFiZWx9fTwvYT5cbiAgICAgIDwvbngtbGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==