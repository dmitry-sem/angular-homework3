import { Component, OnInit } from '@angular/core';
import { HotelsService } from './hotels.service';
import { IHotel } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLoading = true;

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.hotelsService.getHotels$(true).subscribe((hotels: IHotel[]) => {
      this.isLoading = hotels.length === 0;
    });
  }
}
