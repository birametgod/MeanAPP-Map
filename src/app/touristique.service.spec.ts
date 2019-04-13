import { TestBed } from '@angular/core/testing';

import { TouristiqueService } from './touristique.service';

describe('TouristiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristiqueService = TestBed.get(TouristiqueService);
    expect(service).toBeTruthy();
  });
});
