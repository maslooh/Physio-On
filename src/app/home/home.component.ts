import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services=["service1","service2","service3","service4"]

  constructor() { }

  ngOnInit(): void {
  }

}
