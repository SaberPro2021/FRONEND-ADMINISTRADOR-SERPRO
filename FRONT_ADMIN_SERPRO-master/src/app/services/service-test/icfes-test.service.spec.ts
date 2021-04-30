import { TestBed } from '@angular/core/testing';

import { IcfesTestService } from './icfes-test.service';

describe('IcfesTestService', () => {
  let service: IcfesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcfesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
