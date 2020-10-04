import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'modal-window-buttons',
  templateUrl: './modal-window-buttons.component.html',
  styleUrls: ['./modal-window-buttons.component.scss']
})
export class ModalWindowButtonsComponent {
  @Input()
  showCancel: boolean;

  @Output()
  cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  submit: EventEmitter<void> = new EventEmitter<void>();

  cancelClick(): void {
    this.cancel.emit();
  }

  submitClick(): void {
    this.submit.emit();
  }
}
