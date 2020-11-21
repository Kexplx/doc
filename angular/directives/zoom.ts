import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective {
  @HostBinding('style.zoom') zoom = '100%';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.zoom = '500%';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.zoom = '100%';
  }
}
