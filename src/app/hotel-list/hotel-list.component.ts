import { Component, OnInit } from '@angular/core';
import { HotelType, IHotel } from '../mock';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public hotels: IHotel[];
  public selectedHotel: IHotel|null;
  public selectedHotelType: HotelType;

  public HotelType: typeof HotelType = HotelType;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsService.getHotels$(true).subscribe((hotels: IHotel[]) => {
      this.hotels = hotels;
    });

    this.hotelsService.getSelectedHotel$().subscribe((hotel: IHotel|null) => {
      this.selectedHotel = hotel;
    });
  }

  selectHotelType($event: MouseEvent) {
    const hotelType: HotelType = ($event.target as HTMLAnchorElement).getAttribute('data-id') as HotelType;

    if (!hotelType) {
      return;
    }

    this.selectedHotelType = hotelType;

  }

  selectHotel(hotel: IHotel) {
    this.hotelsService.setSelectedHotel(hotel);
  }
}
