import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [this.usernameStartsWithO, Validators.required]),
      email: new FormControl(null, Validators.required)
    });

    this.userForm.valueChanges.subscribe(
      value =>  {
        // ...
      }
    );

    this.userForm.statusChanges.subscribe(
      status =>  {
        // ...
      }
    );
  }

  onSubmit() {
  }

  usernameStartsWithO(control: FormControl): {[s: string]: boolean} {
    if (!control.value) {
      return null;
    }

    if (String(control.value).startsWith('O')) {
      return {usernameStartsWithO: true};
    }

    return null;
  }
}
