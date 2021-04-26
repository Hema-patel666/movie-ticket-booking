import { TestBed } from '@angular/core/testing';

import { TheaterserviceService } from './theaterservice.service';

describe('TheaterserviceService', () => {
  let service: TheaterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
