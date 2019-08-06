import { IHotel } from '../reducers/hotels.reducer';

export const SET_SELECTED_HOTEL = 'SET_SELECTED_HOTEL';

export class SetSelectedHotel {
  public readonly type = SET_SELECTED_HOTEL;

  public constructor(public payload: IHotel) {}
}

export type SelectedHotelActionTypes = SetSelectedHotel;
