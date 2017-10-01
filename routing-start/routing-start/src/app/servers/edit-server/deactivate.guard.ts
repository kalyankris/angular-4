import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRoute } from '@angular/router';
export interface CanComponentDeactivate {
    canDeactivate : () => Observable<boolean>  |Promise<boolean> |boolean;
}


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
canDeactivate(component: CanComponentDeactivate,
            currentRoute:ActivatedRouteSnapshot,
            currentState:RouterStateSnapshot,
            nextState?: RouterStateSnapshot): Observable<boolean>  |Promise<boolean> |boolean |
boolean{
    return component.canDeactivate();
}


}