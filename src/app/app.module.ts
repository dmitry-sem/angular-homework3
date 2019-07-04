import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelSocialInfoComponent } from './hotel-social-info/hotel-social-info.component';
import { HotelTypePipe } from './hotel-type.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelWeatherComponent,
    HotelSocialInfoComponent,
    HotelTypePipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
