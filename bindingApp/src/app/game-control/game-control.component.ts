import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
interval;
@Output() intervalFired = new   EventEmitter<number>();
lastnumber =0;
  constructor() { }

  ngOnInit() {
  }

  onStartgame(){
    console.log("statred");
    
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastnumber );
this.lastnumber++;
    },1000);
  }

resetgame(){
  clearInterval(this.interval);
}

}
