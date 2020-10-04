import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSelectPreviewComponent } from './films-select-preview.component';

describe('FilmsSelectPreviewComponent', () => {
  let component: FilmsSelectPreviewComponent;
  let fixture: ComponentFixture<FilmsSelectPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsSelectPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSelectPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
