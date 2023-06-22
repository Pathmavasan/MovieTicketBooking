import { TestBed } from '@angular/core/testing';

import { LocationGarurdGuard } from './location-garurd.guard';

describe('LocationGarurdGuard', () => {
  let guard: LocationGarurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LocationGarurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
