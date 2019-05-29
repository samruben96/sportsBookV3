import { TestBed } from '@angular/core/testing';

import { GetSportLinesAndTeamDataService } from './get-sport-lines-and-team-data.service';

describe('GetSportLinesAndTeamDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSportLinesAndTeamDataService = TestBed.get(GetSportLinesAndTeamDataService);
    expect(service).toBeTruthy();
  });
});
