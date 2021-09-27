import { NgModule } from '@angular/core';


import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';
import { ComponentsModule } from 'src/app/Components/components.module';
import { CoreModule } from 'src/app/Core/core.module';

@NgModule({
  imports: [
    CoreModule,
    ComponentsModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
