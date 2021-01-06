import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedFilmsPageComponent } from './liked-films-page.component';

describe('LikedFilmsPageComponent', () => {
  let component: LikedFilmsPageComponent;
  let fixture: ComponentFixture<LikedFilmsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedFilmsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedFilmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
