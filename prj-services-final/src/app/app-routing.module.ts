import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
    {path:'',component: HomeComponent},
    {path:'recipes',loadChildren: './recipes/recipe.module#RecipeModule'},
    {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
