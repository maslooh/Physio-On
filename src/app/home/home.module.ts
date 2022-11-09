import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';

import { ProvidersComponent } from './providers/providers.component';
import { LocationsComponent } from './locations/locations.component';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [HomeComponent, ProvidersComponent, LocationsComponent],
  imports: [CoreModule,NewsModule],
  exports: [CoreModule,NewsModule],
})
export class HomeModule {}
