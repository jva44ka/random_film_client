import { TestBed } from '@angular/core/testing';

import {UserFilmHttpService} from './user-film-http.service';

describe('LikeHttpService', () => {
  let service: UserFilmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFilmHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
