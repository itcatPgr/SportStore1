import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[counterOf]',
  standalone: true
})
export class CounterDirective {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>) {
  }
  @Input("counterOf")
  counter = 0;
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    // @ts-ignore
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template,
        new CounterDirectiveContext(i + 1));
    }
  }

}

class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}
