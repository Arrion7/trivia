import { TestBed } from '@angular/core/testing';

import { DailyQuestionService } from './daily-question.service';

describe('DailyQuestionService', () => {
  let service: DailyQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
