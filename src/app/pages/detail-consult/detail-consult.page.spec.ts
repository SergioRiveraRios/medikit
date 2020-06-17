import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailConsultPage } from './detail-consult.page';

describe('DetailConsultPage', () => {
  let component: DetailConsultPage;
  let fixture: ComponentFixture<DetailConsultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailConsultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
