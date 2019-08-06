import { Component, OnInit } from '@angular/core';
import { IHotel } from './store/reducers/hotels.reducer';
import { GetAllHotelsPending } from './store/actions/hotels.action';
import { Store } from '@ngrx/store';
import { IStore } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoading = true;

  constructor(private store: Store<IStore>) {}

  ngOnInit() {
    this.store.dispatch(new GetAllHotelsPending());

    this.store.select('hotels').subscribe((hotels: IHotel[]) => {
      this.isLoading = hotels.length === 0;
    });
  }
}
