import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { OurServicesService } from '../services/our-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clinics = ['clinic1', 'clinic2', 'clinic3', 'clinic4'];

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
  constructor(private ourServices: OurServicesService) {
    this.services = ourServices.services;
  }

  ngOnInit(): void {
    document.querySelectorAll('#test').forEach((el) => {
      el.addEventListener('shown.bs.tab', () => {
        const target = el.getAttribute('data-bs-target');
        const scrollElem = document.querySelector(
          `${target} [data-bs-spy="scroll"]`
        );
        bootstrap.ScrollSpy.getOrCreateInstance(scrollElem!).refresh();
      });
    });
  }
}
