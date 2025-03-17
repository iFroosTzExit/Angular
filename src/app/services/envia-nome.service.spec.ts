import { TestBed } from '@angular/core/testing';

import { EnviaNomeService } from './envia-nome.service';

describe('EnviaNomeService', () => {
  let service: EnviaNomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaNomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
