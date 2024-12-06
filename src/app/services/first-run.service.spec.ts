import { TestBed } from '@angular/core/testing';

import { FirstRunService } from './first-run.service';

describe('FirstRunService', () => {
  let service: FirstRunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstRunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
