// ng add @angular/cdk
import { BreakpointObserver } from '@angular/cdk/layout';

constructor(private bpo: BreakpointObserver) {}

ngOnInit(): void {
	this.bpo.observe('(max-width: 900px), (max-width: 800px)').subscribe(x => {
	  const isMax900 = x.breakpoints['(max-width: 900px)']; // boolean
	});
}


//-----------------------------------
import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ScreenSize {
  Small = '(max-width: 600px)',
  Medium = '(max-width: 900px)',
  Large = '(min-width: 900px)',
}

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenSizeSubject = new BehaviorSubject<ScreenSize | null>(null);

  /**
   *  Emits a `ScreenSize` each time the view width changes and matches a breakpoint.
   *
   * Small = (max-width: 600px),
   * Medium = (max-width: 900px),
   * Large = (min-width: 900px)
   */
  screenSize$ = this.screenSizeSubject.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.subscribeToScreenSizeChanges();
  }

  private subscribeToScreenSizeChanges(): void {
    const { Small, Medium, Large } = ScreenSize;

    // No need to unsubscribe. This subscription is required until the app is stopped.
    this.breakpointObserver.observe([Small, Medium, Large]).subscribe(({ breakpoints }) => {
      const isSmallScreen = breakpoints[Small];
      const isMediumScreen = breakpoints[Medium];

      const screenSize = isSmallScreen ? Small : isMediumScreen ? Medium : Large;

      this.screenSizeSubject.next(screenSize);
    });
  }
}
