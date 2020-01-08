import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent {
  // tslint:disable-next-line: variable-name
  private _code: string;
  @Input('code') set code(value: string) {
    this._code = value.trim();
  }

  // tslint:disable-next-line: variable-name
  private _lang: string;
  @Input('lang') set lang(value: string) {
      this._lang = 'lang-' + value;
  }

  @Input('filename') filename: string;
}
