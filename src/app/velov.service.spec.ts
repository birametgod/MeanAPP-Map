import { TestBed } from '@angular/core/testing';

import { VelovService } from './velov.service';

describe('VelovService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VelovService = TestBed.get(VelovService);
    expect(service).toBeTruthy();
  });
});
