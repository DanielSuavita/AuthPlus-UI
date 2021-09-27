import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../Core/core.module';
import { PagesComponent } from './pages/pages.component';
import { ComponentsModule } from '../Components/components.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CoreModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
