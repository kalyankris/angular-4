import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
id:number;
editmode = false;
recipeForm : FormGroup;
  constructor(private route:ActivatedRoute,private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
       this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName = "";
    let recipeImagePath = "";
    let description = "";
    let recipeIngredients = new FormArray([]);

    if(this.editmode){
      const recipe = this.recipeService.getRecipe(this.id); 
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      description = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,
              [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,Validators.required),
      'imagepath': new FormControl(recipeImagePath,Validators.required),
      'description' : new FormControl(description,Validators.required),
      'ingredients' : recipeIngredients
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    
  }

  onAddIngredient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(
     new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
     })
   );
  }

}
