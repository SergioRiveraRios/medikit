import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientTabsPage } from './patient-tabs.page';

describe('PatientTabsPage', () => {
  let component: PatientTabsPage;
  let fixture: ComponentFixture<PatientTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
