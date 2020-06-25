import { TestBed } from '@angular/core/testing';

import { LikeHttpService } from './like-http.service';

describe('LikeHttpService', () => {
  let service: LikeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
