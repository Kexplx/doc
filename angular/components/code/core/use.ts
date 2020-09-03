samples/codeSample.ts

export const codeSample = `
import { Component } from '@angular/core';
import { code1 } from './samples/code1';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codee = code1;
  title = 'ng-docApp';
}
`;

--------------------------------------------------
app.component.ts

import { Component } from '@angular/core';
import { codeSample } from './samples/codeSample';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  codeSample = codeSample;
  title = 'ng-docApp';
}

------------------------------------------------

app.component.html

<div class="container">
  <div class="row">
    <div class="col-12">
      <app-code 
        [code]="codeSample" 
        [lang]="'typescript'" 
        [filename]="'another.component.ts'">
      </app-code [code]="codeSample">
    </div>
  </div>
</div>


// Or Inline...

<div class="container">
  <div class="row">
    <div class="col-12">
      <app-code 
      [filename]="'another.component.ts'" 
      code="
let arr = [1, 2, 3, 4];

arr.forEach((x) => {
  console.log(x);
});
}
"	></app-code>
    </div>
  </div>
</div>
