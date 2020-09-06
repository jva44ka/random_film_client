import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmLikesPanelComponent } from './film-likes-panel.component';

describe('FilmLikesPanelComponent', () => {
  let component: FilmLikesPanelComponent;
  let fixture: ComponentFixture<FilmLikesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmLikesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmLikesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
