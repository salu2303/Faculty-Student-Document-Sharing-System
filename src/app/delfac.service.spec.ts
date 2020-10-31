import { TestBed } from '@angular/core/testing';

import { DelfacService } from './delfac.service';

describe('DelfacService', () => {
  let service: DelfacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelfacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
