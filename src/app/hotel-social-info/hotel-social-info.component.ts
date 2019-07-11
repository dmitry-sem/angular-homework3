import { Component, OnInit } from '@angular/core';
import { IHotel, ISocialInfo } from '../mock';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-social-info',
  templateUrl: './hotel-social-info.component.html',
  styleUrls: ['./hotel-social-info.component.css']
})
export class HotelSocialInfoComponent implements OnInit {
  public hotelSocialInfo: ISocialInfo|null;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getSelectedHotel$().subscribe((hotel: IHotel|null) => {
      this.hotelSocialInfo = hotel && hotel.social_info;
    });
  }
}
