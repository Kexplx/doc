import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {
  @HostBinding('style.display') display = 'none';
  constructor() { }

  @HostListener('window:scroll') onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.display = 'inherit';
    } else {
      this.display = 'none';
    }
  }

  @HostListener('mousedown') onMouseDown() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
