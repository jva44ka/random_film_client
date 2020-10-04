import {TemplateRef} from '@angular/core';

export interface IModalWindowOptions {
  width?: string;
  height?: string;
  title?: string;
  containsForm?: boolean;
  isConfirmation?: boolean;
  message?: string;
  disableClose?: boolean;
  confirmFunc?: () => object | void;
  templateRef?: TemplateRef<object>;
  crossMark?: boolean;
}
