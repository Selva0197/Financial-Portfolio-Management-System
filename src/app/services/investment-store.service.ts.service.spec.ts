import { TestBed } from '@angular/core/testing';

import { InvestmentStoreServiceTsService } from './investment-store.service.ts.service';

describe('InvestmentStoreServiceTsService', () => {
  let service: InvestmentStoreServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmentStoreServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
