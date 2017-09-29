import { Component, OnInit } from '@angular/core';
import {recipeservice} from  './recipe.service'
import {Recipe} from './recipe.model'

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [recipeservice]
})
export class ReceipesComponent implements OnInit {
selectedRecipe :Recipe;
  constructor(private recipeser : recipeservice) { }

  ngOnInit() {
this.recipeser.recipeSelected.subscribe(
(recipe :Recipe) =>{

  this.selectedRecipe = recipe;

}

);

  }

}
