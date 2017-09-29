import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:this.aroute.snapshot.params['id'],
      name:this.aroute.snapshot.params['name']

    };
this.aroute.params.subscribe(
  (params:Params) =>  {
    this.user.id = params['id'];
    this.user.name= params['name'];
  }
);
  }

}
