import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelTypePipe } from './hotel-type.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    HotelTypePipe,
    PhonePipe
  ],
  exports: [
    HotelTypePipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
