import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { Observable } from 'rxjs';
import { SetSelectedHotel } from '../../store/actions/selected-hotel.action';
import { IHotel, HotelType } from '../../store/reducers/hotels.reducer';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public hotels$: Observable<IHotel[]>;
  public selectedHotel$: Observable<IHotel|null>;
  public selectedHotelType: HotelType;

  public HotelType: typeof HotelType = HotelType;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.hotels$ = this.store.select('hotels');
    this.selectedHotel$ = this.store.select('selectedHotel');
  }

  selectHotelType(hotelType: HotelType) {
    this.selectedHotelType = hotelType;
  }

  selectHotel(hotel: IHotel) {
    this.store.dispatch(new SetSelectedHotel(hotel));
  }
}
