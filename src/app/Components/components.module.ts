import { NgModule } from '@angular/core';
import { CoreModule } from '../Core/core.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CoreModule
  ], exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
