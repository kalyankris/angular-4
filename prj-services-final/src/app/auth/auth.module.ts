import { FormsModule } from '@angular/forms';
import { SingupComponent } from 'app/auth/singup/singup.component';
import { NgModule } from '@angular/core';
import { SinginComponent } from 'app/auth/singin/singin.component';
import { AuthRoutingModule } from 'app/auth/auth-routing.module';

@NgModule({
  declarations: [
    SingupComponent,
    SinginComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule{}
