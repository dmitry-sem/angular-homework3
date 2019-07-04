import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../mock';

@Component({
  selector: 'app-hotel-weather',
  templateUrl: './hotel-weather.component.html',
  styleUrls: ['./hotel-weather.component.css']
})
export class HotelWeatherComponent implements OnInit {
  @Input()
  public hotelWeather: IWeather;

  constructor() { }

  ngOnInit() {
  }

}
