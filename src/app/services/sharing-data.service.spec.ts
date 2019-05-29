import { TestBed } from '@angular/core/testing';

import { SharingDataService } from './sharing-data.service';

describe('SharingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingDataService = TestBed.get(SharingDataService);
    expect(service).toBeTruthy();
  });
});
