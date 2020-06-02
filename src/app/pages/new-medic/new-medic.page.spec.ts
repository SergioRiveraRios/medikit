import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMedicPage } from './new-medic.page';

describe('NewMedicPage', () => {
  let component: NewMedicPage;
  let fixture: ComponentFixture<NewMedicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMedicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
