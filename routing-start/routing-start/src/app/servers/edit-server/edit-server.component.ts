import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './deactivate.guard';
import { Router, CanDeactivate } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  updateChanges = false;

  constructor(private serversService: ServersService,
  private actRoute :ActivatedRoute,
  private router:Router
  ) { }

  ngOnInit() {
    console.log(this.actRoute.snapshot.queryParams);
    console.log(this.actRoute.snapshot.fragment);
    this.actRoute.queryParams.subscribe(
      (queryP:Params) => {
this.allowEdit  = queryP['allowEdit'] === '1' ? true:false;
      }
    );
    this.actRoute.fragment.subscribe();
    const id = +this.actRoute.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.updateChanges = true;
    this.router.navigate(['../',{relativeTo:this.router}]);
  }


  canDeactivate():Observable<boolean>  | Promise<boolean> |boolean{
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !==this.server.name || this.serverStatus !== this.server.status) && !this.updateChanges){
      return confirm('discard??');
    }
    else{
      return true;
    }
  }

}
