import { GetAllHotelsError, GetAllHotelsPending, GetAllHotelsSuccess, HotelsActionTypes } from '../actions/hotels.action';

export interface IHotel {
  _id: number;
  type: HotelType;

  img: string;
  address: string;
  phone: number;
  weather: IWeather;
  social_info: ISocialInfo;
}

export interface IWeather {
  title: string;
  icon: string;
  water: number;
  temperature: number;
}

export interface ISocialInfo {
  title: string;
  img: string;
  followers: number;
  following: number;
}

export enum HotelType {
  ONE_STAR = 'one',
  TWO_STAR = 'two',
  THREE_STAR = 'three',
  FOUR_STAR = 'four',
  FIVE_STAR = 'five'
}

const initialState = [];

export default (state: IHotel[] = initialState, action: HotelsActionTypes) => {
  if (action instanceof GetAllHotelsPending) {
    return state;
  }

  if (action instanceof GetAllHotelsSuccess) {
    return action.payload;
  }

  if (action instanceof GetAllHotelsError) {
    return state;
  }

  return state;
};
