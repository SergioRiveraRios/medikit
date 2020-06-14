import { TestBed } from '@angular/core/testing';

import { NewMedicalConsultService } from './new-medical-consult.service';

describe('NewMedicalConsultService', () => {
  let service: NewMedicalConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewMedicalConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
