import { Component,OnInit} from '@angular/core';
import {UserService} from '../users.service' 
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
 users: string[];


  onSetToInactive(id: number) {
    this.userSer.setToInactive(id);
  }

  constructor(private userSer :UserService){

}

ngOnInit(){
this.users = this.userSer.activeUsers;

}

}
