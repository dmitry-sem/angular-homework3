import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelType, IHotel } from '../mock';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @Input()
  private hotels: IHotel[];

  @Output()
  public hotelSelected: EventEmitter<IHotel> = new EventEmitter();

  public set selectedHotel(selectedHotel: IHotel) {
    this._selectedHotel = selectedHotel;
    this.hotelSelected.emit(selectedHotel);
  }

  public get selectedHotel() {
    return this._selectedHotel;
  }

  private _selectedHotel: IHotel;
  private selectedHotelType: HotelType;
  private HotelType: typeof HotelType = HotelType;

  constructor() { }

  ngOnInit() {
    this.selectedHotel = this.hotels[0];
  }

  selectHotelType($event: MouseEvent) {
    const hotelType: HotelType = ($event.target as HTMLAnchorElement).getAttribute('data-id') as HotelType;

    if (!hotelType) {
      return;
    }

    this.selectedHotelType = hotelType;

  }

  selectHotel(hotel: IHotel) {
    this.selectedHotel = hotel;
  }
}
