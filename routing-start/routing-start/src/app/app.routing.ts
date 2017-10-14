import { ServerResolver } from './servers/server/server.resolver';
import { NewErrorPageComponent } from './new-error-page/new-error-page.component';
import { CanDeactivateGuard } from './servers/edit-server/deactivate.guard';
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
    {  path:'servers' ,component : ServersComponent,
     
      //canActivate:[AuthGuard],
      canActivateChild:[AuthGuard],
    children:[
      {  path:':id',
      component : ServerComponent,resolve:{server :ServerResolver} },
      {  path:':id/edit' ,component : EditServerComponent,canDeactivate:[CanDeactivateGuard] }
    ] },
    //{  path:'something' ,component : ErrorpageComponent },
    {  path:'something' ,component : NewErrorPageComponent,data:{message:'page not found'} },
    {  path:'**' ,redirectTo:'/something' }
    ];
    

@NgModule({
imports:[
    RouterModule.forRoot(appRoutes,{useHash:true})],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}