@Component({
  selector: 'app-accept',
  template: `
    <ng-container [ngTemplateOutlet]="title"></ng-container>
    <ng-container [ngTemplateOutlet]="desc"></ng-container>
  `,
})
export class AcceptComponent implements AfterContentInit {
  @ContentChild('title') title!: TemplateRef<unknown>;
  @ContentChild('desc') desc!: TemplateRef<unknown>;

  hasDesc = false;

  ngAfterContentInit() {
    // `title` or `desc` are undefined if they aren't  passed in by the parent.
    if (this.desc) {
      this.hasDesc = true;
    }
  }
}


-----------------------------------------------------------------


<app-accept>
  <ng-template #title>
    <p>Title</p>
  </ng-template>
  <ng-template #desc>
    <p>Desc</p>
  </ng-template>
</app-accept>
