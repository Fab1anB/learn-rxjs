import { TestBed } from '@angular/core/testing';

import { PlayerManagementApiService } from './player-management-api.service';

describe('PlayerManagementApiService', () => {
  let service: PlayerManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
