import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthSerice } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';
import { AuthModule } from 'app/auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthSerice,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
