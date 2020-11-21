import { Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIfDirective {
  @Input('appMyIf') set show(show: boolean) {
    if (show) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

  // template ref is the <ng-template [appMyIf]>...</ng-template> host element.
  // view container will contain the content of ng-template
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {}
}


// <h1 *appMyIf="true"></h1>

// <ng-template [appMyIf]="false">
//   <h1>Hello DPAP!</h1>
// </ng-template>
