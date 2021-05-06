import { TestBed } from '@angular/core/testing';

import { ForgPassService } from './forg-pass.service';

describe('ForgPassService', () => {
  let service: ForgPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
