import { TestBed } from '@angular/core/testing';

import { SportsNamesDataService } from './sports-names-data.service';

describe('SportsNamesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsNamesDataService = TestBed.get(SportsNamesDataService);
    expect(service).toBeTruthy();
  });
});
