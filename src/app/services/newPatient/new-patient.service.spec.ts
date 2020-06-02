import { TestBed } from '@angular/core/testing';

import { NewPatientService } from './new-patient.service';

describe('NewPatientService', () => {
  let service: NewPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
