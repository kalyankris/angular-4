import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from 'app/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule{}
