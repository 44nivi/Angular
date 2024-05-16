import { TestBed } from '@angular/core/testing';

import { HomeloadingService } from './homeloading.service';

describe('HomeloadingService', () => {
  let service: HomeloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
