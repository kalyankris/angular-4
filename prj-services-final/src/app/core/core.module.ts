import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule{

}
