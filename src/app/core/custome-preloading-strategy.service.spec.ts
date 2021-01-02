import { TestBed } from '@angular/core/testing';

import { CustomePreloadingStrategyService } from './custome-preloading-strategy.service';

describe('CustomePreloadingStrategyService', () => {
  let service: CustomePreloadingStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomePreloadingStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
