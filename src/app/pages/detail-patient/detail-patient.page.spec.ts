import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailPatientPage } from './detail-patient.page';

describe('DetailPatientPage', () => {
  let component: DetailPatientPage;
  let fixture: ComponentFixture<DetailPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
