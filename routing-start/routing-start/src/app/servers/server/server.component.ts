import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private router:Router ,
    private activeR : ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.activeR.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activeR.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  reloadPage(){
this.router.navigate(['/servers'],{relativeTo:this.activeR});
  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.activeR,queryParamsHandling:'preserve'});
  }

}
