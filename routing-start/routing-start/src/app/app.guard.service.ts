import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()



export class AuthGuard implements CanActivate ,CanActivateChild {
   
    constructor(private authSe:AuthService,private route:Router){

    }

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>  |Promise<boolean> |boolean{
    return this.authSe.isAuth()
    .then(
        (authenciated:boolean) =>{
            if(authenciated){
                return true;
            }else{
                this.route.navigate(['/']);
            }
        }
    );
    }

    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>  |Promise<boolean> |boolean{
return this.canActivate(route,state);

    }


 }