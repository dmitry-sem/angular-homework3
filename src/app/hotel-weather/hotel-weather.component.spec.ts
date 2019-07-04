import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelWeatherComponent } from './hotel-weather.component';

describe('HotelWeatherComponent', () => {
  let component: HotelWeatherComponent;
  let fixture: ComponentFixture<HotelWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
