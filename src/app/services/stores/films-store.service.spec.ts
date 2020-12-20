import { TestBed } from '@angular/core/testing';

import { FilmsStoreService } from './films-store.service';

describe('FilmsStoreService', () => {
  let service: FilmsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
