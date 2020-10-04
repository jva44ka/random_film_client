import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowButtonsComponent } from './modal-window-buttons.component';

describe('ModalWindowButtonsComponent', () => {
  let component: ModalWindowButtonsComponent;
  let fixture: ComponentFixture<ModalWindowButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
