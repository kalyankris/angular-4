import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AccountService} from '../account.service'
import {loggingserice} from '../logging.service'


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private log: loggingserice,private accservice:AccountService ){
  
}
  onSetTo(status: string) {
this.accservice.updateStatus(this.id,status);
this.accservice.StatusUpdated.emit(status);
  }
}
