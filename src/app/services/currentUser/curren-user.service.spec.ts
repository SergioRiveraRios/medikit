import { TestBed } from '@angular/core/testing';

import { CurrenUserService } from './curren-user.service';

describe('CurrenUserService', () => {
  let service: CurrenUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
