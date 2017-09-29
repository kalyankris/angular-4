import { shoppingservice } from './../shopping.service';
import { Component, OnInit ,ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameinput') nameinputref ;
 @ViewChild('amountinput') amountinputref ;

  constructor(private shopSer  : shoppingservice) { }

  ngOnInit() {
  }


  onAddItem(){
  const ingname = this.nameinputref.nativeElement.value;
  const amountname = this.amountinputref.nativeElement.value;
  const newIngredient = new Ingredient(ingname,amountname);
  this.shopSer.addIngredient(newIngredient);

  
  }



}
