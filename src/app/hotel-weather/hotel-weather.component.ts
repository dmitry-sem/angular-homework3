import { Component, OnInit } from '@angular/core';
import { IHotel, IWeather } from '../mock';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-weather',
  templateUrl: './hotel-weather.component.html',
  styleUrls: ['./hotel-weather.component.css']
})
export class HotelWeatherComponent implements OnInit {
  public hotelWeather: IWeather|null;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getSelectedHotel$().subscribe((hotel: IHotel|null) => {
      this.hotelWeather = hotel && hotel.weather;
    });
  }
}
