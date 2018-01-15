import { RecipeRoutingModule } from './recipe-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipesEditComponent } from 'app/recipes/recipes-edit/recipes-edit.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipesEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule{

}
