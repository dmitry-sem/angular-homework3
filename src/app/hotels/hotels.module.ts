import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelSocialInfoComponent } from './hotel-social-info/hotel-social-info.component';
import { SharedModule } from '../shared/shared.module';
import { HotelsService } from './hotels.service';

@NgModule({
  declarations: [
    HotelListComponent,
    HotelWeatherComponent,
    HotelSocialInfoComponent
  ],
  exports: [
    HotelListComponent,
    HotelWeatherComponent,
    HotelSocialInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    HotelsService
  ]
})
export class HotelsModule { }
