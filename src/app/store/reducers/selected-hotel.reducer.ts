import { SelectedHotelActionTypes, SetSelectedHotel } from '../actions/selected-hotel.action';

const initialState = null;

export default (state = initialState, action: SelectedHotelActionTypes) => {
  if (action instanceof SetSelectedHotel) {
    return action.payload;
  }

  return state;
};
