import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMedicalConsultPage } from './new-medical-consult.page';

describe('NewMedicalConsultPage', () => {
  let component: NewMedicalConsultPage;
  let fixture: ComponentFixture<NewMedicalConsultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicalConsultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMedicalConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
