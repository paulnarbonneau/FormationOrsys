import { TestBed } from '@angular/core/testing';

import { AnhService } from './anh.service';

describe('AnhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnhService = TestBed.get(AnhService);
    expect(service).toBeTruthy();
  });
});
