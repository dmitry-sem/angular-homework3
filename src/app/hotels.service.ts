import { Injectable } from '@angular/core';
import { mockedHotels, IHotel } from './mock';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels$$: BehaviorSubject<IHotel[]> = new BehaviorSubject([]);
  private selectedHotel$$: BehaviorSubject<IHotel|null> = new BehaviorSubject(null);

  constructor() { }

  public reloadHotels(): void {
    of(mockedHotels).pipe(
      delay(1500)
    ).subscribe((hotels: IHotel[]) => {
      this.hotels$$.next(hotels);
      this.setSelectedHotel(hotels[0]);
    });
  }

  public getHotels$(isNeedReload: boolean = false): Observable<IHotel[]> {
    if (isNeedReload) {
      this.reloadHotels();
    }
    return this.hotels$$.asObservable();
  }

  public setSelectedHotel(hotel: IHotel) {
    this.selectedHotel$$.next(hotel);
  }

  public getSelectedHotel$(): Observable<IHotel|null> {
    return this.selectedHotel$$.asObservable();
  }
}
