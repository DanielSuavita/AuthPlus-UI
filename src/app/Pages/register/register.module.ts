import { NgModule } from '@angular/core';


import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ComponentsModule } from 'src/app/Components/components.module';
import { CoreModule } from 'src/app/Core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
