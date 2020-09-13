import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IModalWindowOptions} from '../modal-window-options';

@Component({
  selector: 'modal-window-dialog',
  templateUrl: './modal-window-dialog.component.html',
  styleUrls: ['./modal-window-dialog.component.scss']
})
export class ModalWindowDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalWindowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IModalWindowOptions
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  ok(): void {
    if (this.data.confirmFunc) {
      this.data.confirmFunc();
    }
    this.cancel();
  }

}
