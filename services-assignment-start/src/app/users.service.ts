import {CounterSerice} from './counter.service'
import {Injectable} from '@angular/core'


@Injectable()

export class UserService{
   

    constructor(private counterser : CounterSerice){

    }


     activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu']; 

setToactive(id:number){
this.activeUsers.push(this.inactiveUsers[id]);
this.inactiveUsers.splice(id,1);
this.counterser.incinActive2activeCount();
}


setToInactive(id:number){
this.inactiveUsers.push(this.activeUsers[id]);
this.activeUsers.splice(id,1);
this.counterser.incactive2inActiveCount();
}
}