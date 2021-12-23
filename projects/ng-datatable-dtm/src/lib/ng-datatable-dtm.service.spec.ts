import { TestBed } from '@angular/core/testing';

import { NgDatatableDtmService } from './ng-datatable-dtm.service';

describe('NgDatatableDtmService', () => {
  let service: NgDatatableDtmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatatableDtmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
