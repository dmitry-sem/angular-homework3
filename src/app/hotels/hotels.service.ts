import { mockedHotels } from '../mock';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IHotel } from '../store/reducers/hotels.reducer';

export class HotelsService {
  public getHotels$(): Observable<IHotel[]> {
    return of(mockedHotels).pipe(
      delay(1500)
    );
  }
}
