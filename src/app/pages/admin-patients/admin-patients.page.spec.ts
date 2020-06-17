import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPatientsPage } from './admin-patients.page';

describe('AdminPatientsPage', () => {
  let component: AdminPatientsPage;
  let fixture: ComponentFixture<AdminPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
