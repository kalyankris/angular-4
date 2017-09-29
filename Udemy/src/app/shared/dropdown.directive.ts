import { Directive , HostListener ,HostBinding} from '@angular/core';



@Directive({
    selector :'[appdropdown]'
})

export class DropDownDirective{
@HostBinding('class.open') isopen=false;


    @HostListener('click')  toggleopen(){

        this.isopen =!this.isopen;
    }

}