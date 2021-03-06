import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {

    // return this.httpClient.put('https://main-udemy.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer')
    // });
    const req = new HttpRequest('PUT', 'https://main-udemy.firebaseio.com/recipes.json',
     this.recipeService.getRecipes(), {reportProgress: true})
     return this.httpClient.request(req)
  }

  getRecipes() {

    // this.httpClient.get<Recipe[]>('https://main-udemy.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://main-udemy.firebaseio.com/recipes.json?', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);

          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
