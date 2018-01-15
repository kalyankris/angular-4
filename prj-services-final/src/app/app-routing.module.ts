import { SinginComponent } from './auth/singin/singin.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from 'app/auth/singup/singup.component';

const appRoutes:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'signup',component:SingupComponent},
    {path:'signin',component:SinginComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
