import { TestBed } from '@angular/core/testing';

import { AdminlService } from './adminl.service';

describe('AdminlService', () => {
  let service: AdminlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
