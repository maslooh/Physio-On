import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../services/news.service';
import { OurServicesService } from '../services/our-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  newsList = [
    {
      title: 'news title 1',
      content: ` This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aperiam maiores iure beatae placeat et rerum possimus ipsa
  commodi, deserunt dicta quis amet ipsam natus! Similique ex earum
  saepe delectus ipsam?`,
      image: '',
    },
    {
      title: 'news title 2',
      content: ` This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aperiam maiores iure beatae placeat et rerum possimus ipsa
  commodi, deserunt dicta quis amet ipsam natus! Similique ex earum
  saepe delectus ipsam?`,
      image: '',
    },
    {
      title: 'news title 3',
      content: ` This is a wider card with supporting text below as a natural
  lead-in to additional content. This content is a little bit
  longer. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aperiam maiores iure beatae placeat et rerum possimus ipsa
  commodi, deserunt dicta quis amet ipsam natus! Similique ex earum
  saepe delectus ipsam?`,
      image: '',
    },
  ];

  services: any[];

  window: Window = window;
  constructor(
    private ourServices: OurServicesService,
    private newsService: NewsService
  ) {
    this.services = this.ourServices.services;
  }

  ngOnInit(): void {}
}
