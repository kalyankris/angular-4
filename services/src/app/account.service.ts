import {Injectable,EventEmitter} from '@angular/core'
import {loggingserice} from './logging.service'


@Injectable()

export class AccountService {

    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
        {
      name: 'Master 2',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private log : loggingserice) { }


    addAccount(name, status) {
    this.accounts.push({name: name, status: status});
      this.log.logToconsole(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.log.logToconsole(status);
  }


StatusUpdated  = new EventEmitter<string>();


}
