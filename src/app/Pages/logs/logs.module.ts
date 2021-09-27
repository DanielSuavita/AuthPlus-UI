import { NgModule } from '@angular/core';


import { LogsPageRoutingModule } from './logs-routing.module';

import { LogsPage } from './logs.page';
import { ComponentsModule } from 'src/app/Components/components.module';
import { CoreModule } from 'src/app/Core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    LogsPageRoutingModule
  ],
  declarations: [LogsPage]
})
export class LogsPageModule {}
