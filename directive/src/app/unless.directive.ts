import { Directive,Input,TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input()  set appUnless(condition:boolean)
  {

    if(!condition){
this.vcref.createEmbeddedView(this.template);
    }

    else
      {
this.vcref.clear();
      }

  }


  constructor(private template:TemplateRef<any>,private vcref:ViewContainerRef) { }

}
