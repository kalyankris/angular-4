import { Component,OnInit } from '@angular/core';
import {UserService} from '../users.service'

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
users: string[];


  onSetToActive(id: number) {
   this.userSer.setToactive(id);
  }

constructor(private userSer :UserService){

}

ngOnInit(){
this.users = this.userSer.inactiveUsers;

}


}
