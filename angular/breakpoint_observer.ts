// ng add @angular/cdk
import { BreakpointObserver } from '@angular/cdk/layout';

constructor(private bpo: BreakpointObserver) {}

ngOnInit(): void {
	this.bpo.observe('(max-width: 900px), (max-width: 800px)').subscribe(x => {
	  const isMax900 = x.breakpoints['(max-width: 900px)']; // boolean
	});
}


//-----------------------------------



this.breakpointObserver
  .observe('(max-width: 900px)')
  .subscribe(({ matches }) => (this.isSmallScreen = matches));



import { Injectable } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Subject, BehaviorSubject } from "rxjs";

export enum ScreenSize {
  Small = "(max-width: 600px)",
  Medium = "(max-width: 900px)",
  Large = "(min-width: 900px)"
}

@Injectable()
export class ScreenSizeService {
  private _screenSize$ = new BehaviorSubject<ScreenSize>(null);

  get screenSize$() {
    return this._screenSize$.asObservable();
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    const { Small, Medium, Large } = ScreenSize;

    this.breakpointObserver
      .observe([Small, Medium, Large])
      .subscribe(({ breakpoints }) => {
        let screenSize: ScreenSize = Large;

        if (breakpoints[Small]) {
          screenSize = Small;
        } else if (breakpoints[Medium]) {
          screenSize = Medium;
        }

        this._screenSize$.next(screenSize);
      });
  }
}