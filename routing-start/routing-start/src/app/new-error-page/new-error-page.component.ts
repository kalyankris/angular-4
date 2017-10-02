import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-error-page',
  templateUrl: './new-error-page.component.html',
  styleUrls: ['./new-error-page.component.css']
})
export class NewErrorPageComponent implements OnInit {

  errormessage :string;

  constructor(private routeA: ActivatedRoute) { }

  ngOnInit() {
    //this.routeA = this.routeA.snapshot.data['message'];
    this.routeA.data.subscribe(
      (data:Data) => {
        this.errormessage = data['message'];
      }
    );
  }

}
