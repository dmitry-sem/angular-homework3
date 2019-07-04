import {Component, Input, OnInit} from '@angular/core';
import {ISocialInfo} from '../mock';

@Component({
  selector: 'app-hotel-social-info',
  templateUrl: './hotel-social-info.component.html',
  styleUrls: ['./hotel-social-info.component.css']
})
export class HotelSocialInfoComponent implements OnInit {
  @Input()
  private hotelSocialInfo: ISocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
