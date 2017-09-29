import { Directive ,Renderer2,OnInit ,ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective implements OnInit{

@Input() defaultcolor :string = 'transparent';
@Input() highlightcolor :string = 'blue';


@HostBinding('style.backgroundColor') background:string = this.defaultcolor;  
@HostListener('mouseenter') mouseover(){
   // this.render.setStyle(this.eleref.nativeElement,'background-color','blue');
     this.background = this.highlightcolor;
}


@HostListener('mouseleave') mouseleave1(){
    //this.render.setStyle(this.eleref.nativeElement,'background-color','transparent');
    this.background = this.defaultcolor;  
}





  constructor(private eleref:ElementRef,private render :Renderer2) {


   }

   ngOnInit(){
     this.background = this.defaultcolor;

  // this.render.setStyle(this.eleref.nativeElement,'background-color','blue');
   }

}
