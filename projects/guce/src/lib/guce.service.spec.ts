import { TestBed } from '@angular/core/testing';

import { GuceService } from './guce.service';

describe('GuceService', () => {
  let service: GuceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
