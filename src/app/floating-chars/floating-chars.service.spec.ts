import { TestBed } from '@angular/core/testing';

import { FloatingCharsService } from './floating-chars.service';

describe('FloatingCharsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloatingCharsService = TestBed.get(FloatingCharsService);
    expect(service).toBeTruthy();
  });
});
