import { Actions, Effect, ofType } from '@ngrx/effects';
import { HotelsService } from '../../hotels/hotels.service';
import { GET_ALL_HOTELS_PENDING, GET_ALL_HOTELS_SUCCESS, GetAllHotelsSuccess } from '../actions/hotels.action';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import { IHotel } from '../reducers/hotels.reducer';
import { EMPTY } from 'rxjs';
import { SetSelectedHotel } from '../actions/selected-hotel.action';

export class HotelsEffects {

  constructor(private actions$: Actions,
              private hotelsService: HotelsService) {}

  @Effect()
  loadHotels$ = this.actions$.pipe(
    ofType(GET_ALL_HOTELS_PENDING),
    switchMap(() => this.hotelsService.getHotels$()
      .pipe(
        map((hotels: IHotel[]) => new GetAllHotelsSuccess(hotels)),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  selectHotel$ = this.actions$.pipe(
    ofType(GET_ALL_HOTELS_SUCCESS),
    pluck('payload'),
    map((hotels: IHotel[]) => new SetSelectedHotel(hotels[0]))
  );
}
