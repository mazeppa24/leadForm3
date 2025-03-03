import { TestBed } from '@angular/core/testing';

import { AgencyListService } from './agency-list.service';

describe('AgencyListService', () => {
  let service: AgencyListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
