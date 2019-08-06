import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { IHotel, ISocialInfo } from '../../store/reducers/hotels.reducer';

@Component({
  selector: 'app-hotel-social-info',
  templateUrl: './hotel-social-info.component.html',
  styleUrls: ['./hotel-social-info.component.css']
})
export class HotelSocialInfoComponent implements OnInit {
  public hotelSocialInfo: ISocialInfo|null;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.select('selectedHotel').subscribe((hotel: IHotel|null) => {
      this.hotelSocialInfo = hotel && hotel.social_info;
    });
  }
}
