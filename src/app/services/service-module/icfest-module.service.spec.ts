import { TestBed } from '@angular/core/testing';

import { IcfestModuleService } from './icfest-module.service';

describe('IcfestModuleService', () => {
  let service: IcfestModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcfestModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
