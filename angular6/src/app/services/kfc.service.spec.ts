import { TestBed } from '@angular/core/testing';

import { KfcService } from './kfc.service';

describe('KfcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KfcService = TestBed.get(KfcService);
    expect(service).toBeTruthy();
  });
});
