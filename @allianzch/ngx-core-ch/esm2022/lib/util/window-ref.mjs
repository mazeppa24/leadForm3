import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * return the global native browser window object
 * @returns Window
 */
function _window() {
    return window;
}
export class WindowRef {
    reload(bool) {
        this.nativeWindow().location.reload(bool);
    }
    get nativeWindow() {
        return _window();
    }
    get navigator() {
        return this.nativeWindow.navigator;
    }
    locationBase() {
        const loc = this.nativeWindow.location;
        return `${loc.protocol}//${loc.host}/`;
    }
    locationHrefBase() {
        const href = this.nativeWindow.location.href;
        if (!href.includes('#')) {
            return href;
        }
        return href.substr(0, href.indexOf('#'));
    }
    navigateToUrl(url) {
        this.nativeWindow.location.href = url;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: WindowRef, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FsbGlhbnpjaC9uZ3gtY29yZS1jaC9zcmMvbGliL3V0aWwvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7O0dBR0c7QUFDSCxTQUFTLE9BQU87SUFDZCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBR0QsTUFBTSxPQUFPLFNBQVM7SUFDcEIsTUFBTSxDQUFDLElBQWE7UUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDeEMsQ0FBQzs4R0E1QlUsU0FBUztrSEFBVCxTQUFTOzsyRkFBVCxTQUFTO2tCQURyQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIHJldHVybiB0aGUgZ2xvYmFsIG5hdGl2ZSBicm93c2VyIHdpbmRvdyBvYmplY3RcbiAqIEByZXR1cm5zIFdpbmRvd1xuICovXG5mdW5jdGlvbiBfd2luZG93KCk6IGFueSB7XG4gIHJldHVybiB3aW5kb3c7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXaW5kb3dSZWYge1xuICByZWxvYWQoYm9vbDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubmF0aXZlV2luZG93KCkubG9jYXRpb24ucmVsb2FkKGJvb2wpO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBhbnkge1xuICAgIHJldHVybiBfd2luZG93KCk7XG4gIH1cblxuICBnZXQgbmF2aWdhdG9yKCk6IE5hdmlnYXRvciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlV2luZG93Lm5hdmlnYXRvcjtcbiAgfVxuXG4gIGxvY2F0aW9uQmFzZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvYyA9IHRoaXMubmF0aXZlV2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtsb2MucHJvdG9jb2x9Ly8ke2xvYy5ob3N0fS9gO1xuICB9XG5cbiAgbG9jYXRpb25IcmVmQmFzZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhyZWYgPSB0aGlzLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGlmICghaHJlZi5pbmNsdWRlcygnIycpKSB7XG4gICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyKDAsIGhyZWYuaW5kZXhPZignIycpKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG9VcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICB9XG59XG4iXX0=