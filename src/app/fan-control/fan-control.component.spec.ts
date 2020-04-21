import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FanControlComponent } from './fan-control.component';

describe('FanControlComponent', () => {
  let component: FanControlComponent;
  let fixture: ComponentFixture<FanControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanControlComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FanControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
