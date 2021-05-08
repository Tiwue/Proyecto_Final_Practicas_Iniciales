import { TestBed } from '@angular/core/testing';

import { AdmonService } from './admon.service';

describe('AdmonService', () => {
  let service: AdmonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
