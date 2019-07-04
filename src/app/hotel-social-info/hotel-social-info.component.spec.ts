import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSocialInfoComponent } from './hotel-social-info.component';

describe('HotelSocialInfoComponent', () => {
  let component: HotelSocialInfoComponent;
  let fixture: ComponentFixture<HotelSocialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSocialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSocialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
