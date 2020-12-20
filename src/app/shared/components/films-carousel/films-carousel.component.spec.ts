import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCarouselComponent } from './films-carousel.component';

describe('FilmsCarouselComponent', () => {
  let component: FilmsCarouselComponent;
  let fixture: ComponentFixture<FilmsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
