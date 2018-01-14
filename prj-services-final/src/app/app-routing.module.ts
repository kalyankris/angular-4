import { AuthGuard } from './auth/auth-guard.service';
import { SinginComponent } from './auth/singin/singin.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { Recipe } from './recipes/recipe.model';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from 'app/auth/singup/singup.component';

const appRoutes:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipesEditComponent, canActivate: [AuthGuard]},
        {path:':id',component:RecipeDetailComponent},
        {path:':id/edit',component:RecipesEditComponent,canActivate: [AuthGuard]}
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'signup',component:SingupComponent},
    {path:'signin',component:SinginComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
