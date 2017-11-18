import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  @ViewChild('f') slform:NgForm;
  subscription:  Subscription;
  editmode = false;
  editedItemIndex : number;
  editedItem:Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number) => {
        this.editedItemIndex = index;
        this.editmode = true;
        this.editedItem = this.slService.getIngredeint(index);
        this.slform.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form:NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
   
    if(this.editmode ){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editmode =false;
    form.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  clear(){
    this.slform.reset();
    this.editmode = false;
  }
}
