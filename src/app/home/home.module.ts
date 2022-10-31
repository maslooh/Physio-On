import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';

import { ProvidersComponent } from './providers/providers.component';
import { LocationsComponent } from './locations/locations.component';



@NgModule({
  declarations: [HomeComponent, ProvidersComponent, LocationsComponent],
  imports: [
    CommonModule,CoreModule
  ],
  exports:[CoreModule]
})
export class HomeModule { }
