import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numbersObssubscription : Subscription;
  customObssubscription : Subscription
  constructor() { }

  ngOnInit() {
    const numbers = Observable.interval(1000).map(
      (data:number) => {
        return data*2;
      }
    );
    this.numbersObssubscription = numbers.subscribe(
      (number : number) => {
        console.log(number);     
      }
    );
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
    this.customObssubscription = myobserver.subscribe(
      (data:string) => {console.log(data);},
      (error:string) => {console.log(error);},
      () => {console.log('completed');}
    );
  } 
  ngOnDestroy(){
    this.numbersObssubscription.unsubscribe();
    this.customObssubscription.unsubscribe();
  }
}
