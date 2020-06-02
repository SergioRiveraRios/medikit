import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientHomePage } from './patient-home.page';

describe('PatientHomePage', () => {
  let component: PatientHomePage;
  let fixture: ComponentFixture<PatientHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
