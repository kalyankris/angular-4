import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class DataStorageService {
    constructor(private http:Http,private recipeService:RecipeService) {}

    storeRecpies() {
       return this.http.put('https://main-udemy.firebaseio.com/recipes.json',this.recipeService.getRecipes());
    }
}