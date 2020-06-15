import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientMedicalConsultsPage } from './patient-medical-consults.page';

describe('PatientMedicalConsultsPage', () => {
  let component: PatientMedicalConsultsPage;
  let fixture: ComponentFixture<PatientMedicalConsultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicalConsultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientMedicalConsultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
