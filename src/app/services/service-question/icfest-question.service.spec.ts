import { TestBed } from '@angular/core/testing';

import { IcfestQuestionService } from './icfest-question.service';

describe('IcfestQuestionService', () => {
  let service: IcfestQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcfestQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
