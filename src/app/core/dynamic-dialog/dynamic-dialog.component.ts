import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss'],
  providers: [DialogService],
})
export class DynamicDialogComponent implements OnInit, OnDestroy {
  @Input() component: any;
  @Input() maximizable: boolean = true;
  ref: DynamicDialogRef;
  @Input() width: string = '50%';
  @Input() height: string = '50%';
  @Input() styleClass: string = '';
  @Input() icon: string = '';
  @Input() label: string = 'show';
  @Input() dismissableMask: boolean = true;
  @Input() dialogBtnStyleClass: string = '';
  
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}

  show() {
    this.ref = this.dialogService.open(this.component, {
      header: 'Sign In',
      width: this.width,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: this.maximizable,
      dismissableMask: this.dismissableMask,
      styleClass:this.styleClass
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
