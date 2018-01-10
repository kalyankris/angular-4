import { AuthSerice } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map'

@Injectable()
export class DataStorageService {
    constructor(
      private http:Http,
      private recipeService:RecipeService,
      private authSerice:AuthSerice
    ) {}

    storeRecpies() {
      const token = this.authSerice.getToken();
       return this.http.put('https://main-udemy.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }

    getRecipes() {
      const token = this.authSerice.getToken();
        return this.http.get('https://main-udemy.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: Response) => {
                const recipes: Recipe[]= response.json();
                for (let reciepe of recipes){
                 if(!reciepe['ingredients']){
                     console.log(reciepe);
                    reciepe['ingredients'] = [];
                 }
            }
            return recipes;
         }
        )
        .subscribe(
            (receipes: Recipe[]) => {
                this.recipeService.setRecipes(receipes);
            }
        );
     }
}
