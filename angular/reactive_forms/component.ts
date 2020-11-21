export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', this.forbiddenPatternValidator(/^O/)],
    });

    this.patchDefaultValues();
  }

  onSubmit(): void {
    // Submit the form ...

    this.resetForm();
  }

  resetForm(): void {
    this.registrationForm.reset();
    this.patchDefaultValues();
  }

  patchDefaultValues(): void {
    this.registrationForm.patchValue({
      firstName: 'Default',
    });
  }

  forbiddenPatternValidator(pattern: RegExp): ValidatorFn {
    return ({ value }: AbstractControl): { [key: string]: { pattern: RegExp } } | null => {
      const isMatch = pattern.test(String(value));

      return isMatch ? { forbiddenPattern: { pattern } } : null;
    };
  }
}