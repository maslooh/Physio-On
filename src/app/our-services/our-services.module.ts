import { NgModule } from '@angular/core';
import { ServiceItemComponent } from './service-item/service-item.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [ServiceItemComponent],
  imports: [CoreModule],
  exports: [ServiceItemComponent],
})
export class OurServicesModule {}
