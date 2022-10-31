import { Component, OnInit } from '@angular/core';
import { LoactionsService } from 'src/app/services/loactions.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations:any[];

  constructor(private locationsService: LoactionsService) { 
    this.locations=locationsService.locations
  }

  ngOnInit(): void {
  }

}
