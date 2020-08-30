import { TestBed } from '@angular/core/testing';

import { FilmHttpService } from './film-http.service';

describe('FilmHttpService', () => {
  let service: FilmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
