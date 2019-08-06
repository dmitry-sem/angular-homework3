import hotels, { IHotel } from './reducers/hotels.reducer';
import selectedHotel from './reducers/selected-hotel.reducer';

export interface IStore {
  hotels: IHotel[];
  selectedHotel: IHotel;
}

export const reducers = {
  hotels,
  selectedHotel
};
