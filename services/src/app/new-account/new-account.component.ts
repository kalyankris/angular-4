import { Component, EventEmitter, Output } from '@angular/core';

import {loggingserice} from '../logging.service'

import {AccountService} from '../account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {


  constructor(private log: loggingserice,private accservice:AccountService ){
  this.accservice.StatusUpdated.subscribe(
    (status :string) => { alert("new status "  + status);}
  );
}

  onCreateAccount(accountName, accountStatus) {
    this.accservice.addAccount(accountName,accountStatus)
    
     }


}
