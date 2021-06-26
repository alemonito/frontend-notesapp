import { TestBed } from '@angular/core/testing';

import { SageGuard } from './sage.guard';

describe('SageGuard', () => {
  let guard: SageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
