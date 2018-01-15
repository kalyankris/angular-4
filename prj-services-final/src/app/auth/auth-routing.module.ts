import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from 'app/auth/singup/singup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authRoutes : Routes = [
  {path:'signup',component:SingupComponent},
  {path:'signin',component:SinginComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
