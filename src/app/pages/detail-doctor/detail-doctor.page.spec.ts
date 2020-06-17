import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailDoctorPage } from './detail-doctor.page';

describe('DetailDoctorPage', () => {
  let component: DetailDoctorPage;
  let fixture: ComponentFixture<DetailDoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailDoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
