import { TestBed } from '@angular/core/testing';

import { AddstuService } from './addstu.service';

describe('AddstuService', () => {
  let service: AddstuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddstuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
