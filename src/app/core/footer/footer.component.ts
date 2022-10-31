import { Component, OnInit } from '@angular/core';
import { LoactionsService } from 'src/app/services/loactions.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;

  constructor(public locationsService:LoactionsService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

}
