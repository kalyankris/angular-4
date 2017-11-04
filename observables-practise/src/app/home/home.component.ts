import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const numbers = Observable.interval(1000);
    // numbers.subscribe(
    //   (number : number) => {
    //     console.log(number);     
    //   }
    // );
    const  myobserver = Observable.create((observer : Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      },2000);
      setTimeout(() => {
        observer.next('second package');
      },4000);
      setTimeout(() => {
       // observer.error('fail package');
      },5000);
      setTimeout(() => {
        observer.complete();
      },5000);
    });
    myobserver.subscribe(
      (data:string) => {console.log(data);},
      (error:string) => {console.log(error);},
      () => {console.log('completed');}
    );
  } 
 



}
