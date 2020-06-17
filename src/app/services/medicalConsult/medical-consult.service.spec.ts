import { TestBed } from '@angular/core/testing';

import { MedicalConsultService } from './medical-consult.service';

describe('MedicalConsultService', () => {
  let service: MedicalConsultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalConsultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
