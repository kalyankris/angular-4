import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class DataStorageService {
    constructor(private http:Http,private recipeService:RecipeService) {}

    storeRecpies() {
       return this.http.put('https://main-udemy.firebaseio.com/recipes.json',this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://main-udemy.firebaseio.com/recipes.json')
        .subscribe(
            (response: Response) => {
                const recipes: Recipe[]= response.json();
                this.recipeService.setRecipes(recipes);
            }
        );
     }
}