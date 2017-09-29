import { shoppingservice } from './../shopping-list/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model'

@Injectable()

export class recipeservice{
  private  recipes : Recipe [] = [
    new Recipe(
      'panner tomato masala',
      'Indian item',
      'http://maunikagowardhan.co.uk/wp-content/uploads/2013/11/Kashmiri-Paneer-Masala1-1024x683.jpg',
      [
        new Ingredient('panner',5),
        new Ingredient('tomata',10)
      ]),
  new Recipe(
    'Burger',
  'Westen item',
  'https://static.olocdn.net/menu/chilis/32d488be113c913c5909b7d770506747.jpg',
  [
     new Ingredient('bread',2),
      new Ingredient('potato',10),
  ])
];
recipeSelected = new EventEmitter<Recipe>();

constructor(private shppingSer : shoppingservice){

}

getrecipes(){
   return this.recipes.slice();
}


addIngredientToShoppingList(ingredients :Ingredient[]){
this.shppingSer.addIngredients(ingredients);
}


}