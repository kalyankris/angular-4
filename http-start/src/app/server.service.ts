import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http:Http) { }

  storeServers(servers:any[]){
    return this.http.post('https://udemy-ng-http-b2b1c.firebaseio.com/data.json',servers);
  }

}
