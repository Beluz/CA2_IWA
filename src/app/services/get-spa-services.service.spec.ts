import { TestBed } from '@angular/core/testing';

import { GetSpaServicesService } from './get-spa-services.service';

describe('GetSpaServicesService', () => {
  let service: GetSpaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
