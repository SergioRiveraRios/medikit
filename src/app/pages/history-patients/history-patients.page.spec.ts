import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoryPatientsPage } from './history-patients.page';

describe('HistoryPatientsPage', () => {
  let component: HistoryPatientsPage;
  let fixture: ComponentFixture<HistoryPatientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPatientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
