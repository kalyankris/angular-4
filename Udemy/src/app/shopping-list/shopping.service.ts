import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'


export class shoppingservice{
  
    ingredients : Ingredient[]= [

  new Ingredient('apples',10),
  new Ingredient ('tomato',5)

];




getShopList(){
   return this.ingredients;
}

addIngredient(ingredients : Ingredient){
this.ingredients.push(ingredients);

}

addIngredients(ingredients : Ingredient[]){
this.ingredients.push(...ingredients);
}


}