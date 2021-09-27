import { NgModule } from '@angular/core';


import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { ComponentsModule } from 'src/app/Components/components.module';
import { CoreModule } from 'src/app/Core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    AuthPageRoutingModule
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
