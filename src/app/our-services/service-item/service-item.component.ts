import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OurServicesService } from 'src/app/services/our-services.service';
import { OurServicesModule } from '../our-services.module';
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  service: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private services: OurServicesService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service = this.services.getServiceById(id);
  }
}
