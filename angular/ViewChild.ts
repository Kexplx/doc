// Component
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
let text = this.serverContentInput.nativeElement.value;

// --------------------------------------------------------------------------------------

// Template
<input #serverContentInput>
{{serverContentInput}}
(click) = "someFunction(serverContentInput)"