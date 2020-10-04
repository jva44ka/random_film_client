import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowDialogComponent } from './modal-window-dialog.component';

describe('ModalWindowDialogComponent', () => {
  let component: ModalWindowDialogComponent;
  let fixture: ComponentFixture<ModalWindowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
