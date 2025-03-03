import { DomPortalOutlet, PortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, Input, TemplateRef, Type, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-window-portal',
  template: '<div style="background-color: inherit"><b *ngIf="title" style="margin: 0 10px">{{title}}</b><button (click)="openWindowClick()">Open window</button><ng-template #portalHost #portalContent><ng-content></ng-content></ng-template></div>',
})
export class WindowPortalComponent<T> {

  @ViewChild('portalHost', {
    read: ViewContainerRef,
    static: false
  }) portalHost!: ViewContainerRef;
  @ViewChild('portalContent', { static: false }) portalContent!: TemplateRef<any>
  @Input() name: string = "_blank";
  @Input() autoopen: boolean = false;
  @Input() title: string = '';
  private openWindow?: Window | null
  private portalOutlet?: PortalOutlet;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector, private appRef: ApplicationRef) { }

  ngAfterViewInit() {
    if (this.autoopen) {
      this.openWindowClick()
    }
  }



  openWindowClick() {
    // Create a ComponentPortal with the provided content
    const portal = new TemplatePortal(this.portalContent, this.portalHost)

    // Create a new window and attach the component to it
    if (!this.openWindow) {
      this.openWindow = window.open('', this.name);
      window.addEventListener('close', () => {
        if (this.portalOutlet) {
          this.portalOutlet.detach()
          this.portalOutlet = undefined
        }
        if (this.openWindow) {
          this.openWindow.close()
          this.openWindow = undefined
        }
      })

    }
    this.portalOutlet = new DomPortalOutlet((this.openWindow as Window).document.body, this.componentFactoryResolver, this.appRef, this.portalHost.injector);
    this.portalOutlet.attach(portal);
    window.addEventListener('beforeunload', () => {
      if (this.portalOutlet) {
        this.portalOutlet.detach()
        this.portalOutlet = undefined
      }
    })
  }
}
