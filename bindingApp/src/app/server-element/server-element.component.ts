import { Component, OnInit,Input,ContentChild,AfterContentInit ,ViewEncapsulation,OnChanges,SimpleChanges,DoCheck} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit ,OnChanges ,DoCheck ,AfterContentInit{
   @ContentChild('ngContentapp') para ;
  @Input() name;

@Input('srvElement') element:{
  type:string,name:string,content:string
};

  constructor() { 
    console.log("constryctoe called");
    
  }

  ngOnInit() {
     console.log("ngOnInit called");
  }

ngOnChanges(changes:SimpleChanges){
console.log(changes);

}

ngDoCheck(){
  console.log("DoCheck1");
  
}
ngAfterContentInit(){
  console.log(this.para.nativeElement.textContent);
  

  
}

}
