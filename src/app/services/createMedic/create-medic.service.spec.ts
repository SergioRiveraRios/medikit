import { TestBed } from '@angular/core/testing';

import { CreateMedicService } from './create-medic.service';

describe('CreateMedicService', () => {
  let service: CreateMedicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateMedicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
