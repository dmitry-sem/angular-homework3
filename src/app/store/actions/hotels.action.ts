import { IHotel } from '../reducers/hotels.reducer';

export const GET_ALL_HOTELS_PENDING = 'GET_ALL_HOTELS_PENDING';
export const GET_ALL_HOTELS_SUCCESS = 'GET_ALL_HOTELS_SUCCESS';
export const GET_ALL_HOTELS_ERROR = 'GET_ALL_HOTELS_ERROR';


export class GetAllHotelsPending {
  public readonly type = GET_ALL_HOTELS_PENDING;
}

export class GetAllHotelsSuccess {
  public readonly type = GET_ALL_HOTELS_SUCCESS;

  public constructor(public payload: IHotel[]) {}
}

export class GetAllHotelsError {
  public readonly type = GET_ALL_HOTELS_ERROR;

  public constructor(public payload: any) {}
}

export type HotelsActionTypes = GetAllHotelsPending | GetAllHotelsSuccess | GetAllHotelsError;
