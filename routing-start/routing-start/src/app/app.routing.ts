import { AuthGuard } from './app.guard.service';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { NgModule } from '@angular/core';



const appRoutes:  Routes = [
    {  path:'' ,component : HomeComponent },
    {  path:'users' ,component : UsersComponent,children:[
      {  path:':id/:name' ,component : UserComponent }
    ] },
    {  path:'servers' ,canActivate:[AuthGuard],component : ServersComponent,children:[
      {  path:':id' ,component : ServerComponent },
      {  path:':id/edit' ,component : EditServerComponent }
    ] },
    {  path:'something' ,component : ErrorpageComponent },
    {  path:'**' ,redirectTo:'/something' }
    ];
    

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}