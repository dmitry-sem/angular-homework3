import { Pipe, PipeTransform } from '@angular/core';
import {HotelType, IHotel} from './mock';

@Pipe({
  name: 'hotelType'
})
export class HotelTypePipe implements PipeTransform {

  transform(hotels: IHotel[], hotelType: HotelType): IHotel[] {
    if (!hotels) {
      return;
    }
    if (!hotelType) {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => hotel.type === hotelType);
  }

}
