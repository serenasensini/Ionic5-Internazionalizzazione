import { TestBed } from '@angular/core/testing';

import { TranslateconfigService } from './translateconfig.service';

describe('TranslateconfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateconfigService = TestBed.get(TranslateconfigService);
    expect(service).toBeTruthy();
  });
});
