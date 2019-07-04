import { Component, OnInit } from '@angular/core';
import { hotels$, IHotel } from './mock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hotels: IHotel[];
  public selectedHotel: IHotel;

  private hotels$: Observable<IHotel[]> = hotels$;

  ngOnInit(): void {
    this.hotels$.subscribe((hotels: IHotel[]) => {
      this.hotels = hotels;
    });
  }

  public hotelSelected(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }
}
