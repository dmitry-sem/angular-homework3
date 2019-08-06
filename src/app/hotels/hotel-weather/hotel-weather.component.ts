import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { IHotel, IWeather } from '../../store/reducers/hotels.reducer';

@Component({
  selector: 'app-hotel-weather',
  templateUrl: './hotel-weather.component.html',
  styleUrls: ['./hotel-weather.component.css']
})
export class HotelWeatherComponent implements OnInit {
  public hotelWeather: IWeather|null;

  constructor(private store: Store<IStore>) { }

  ngOnInit() {
    this.store.select('selectedHotel').subscribe((hotel: IHotel|null) => {
      this.hotelWeather = hotel && hotel.weather;
    });
  }
}
