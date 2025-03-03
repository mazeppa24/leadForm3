import { ComponentFactoryResolver, Injectable, InjectionToken, Injector, Type, APP_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateRendererService {

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver) { }

  /**
   * Renders `component` and returns resulting HTML of that operation
   * @note The API used have been deprecated in Angular 13. For projects using Angular 13 or later, it should be updated to use new APIs.
   *
   * @param component Component to be rendered Please note that this component has to be added as @NgModule.entryComponents?
   * @param ctx Optional component data. This will be assigned to `component` inputs.
   * @returns Rendered HTML of a component
   *
   * @example
   *
   * @Component(...)
   * class LeadComponent {
   *   @Input() name: string
   * }
   * templateRendererService.render(LeadComponent, { name: "Joe" })
   *
  */
  render<T>(component: Type<T>, ctx?: any): string {
    const component_factory = this.cfr.resolveComponentFactory<T>(component)
    const component_ref = component_factory.create(this.injector)
    if (ctx) {
      for (const { propName } of component_factory.inputs) {
        (component_ref.instance as any)[propName] = ctx[propName]
      }
    }
    component_ref.changeDetectorRef.detectChanges()

    return this._stripNgAttributes(component_ref.location.nativeElement.innerHTML)
  }

  _stripNgAttributes(content: string): string {
    let rootElement = 'div'
    if (content.startsWith("<tr")) {
      rootElement = 'table'
    }
    let root = document.createElement(rootElement)
    root.innerHTML = content
    this._stripNgAttributesLoop(root)
    return root.innerHTML
  }

  _stripNgAttributesLoop(el: Element) {
    const attrsToDelete = []
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes.item(i)
      if (attr && attr.localName.startsWith("_ng")) {
        attrsToDelete.push(attr?.localName)
      }
    }

    for (const attr of attrsToDelete) {
      el.attributes.removeNamedItem(attr)
    }

    for (let i = 0; i < el.children.length; i++) {
      this._stripNgAttributesLoop(el.children[i])
    }
  }
}
