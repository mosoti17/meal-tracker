import{Component,Input,Output, EventEmitter} from'@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'new-meal',
  template: `
  <h2>New Meal</h2>
<div>
  <label>Enter Meal Name:</label>
  <input type="text" #newName required>
</div>
<div>
  <label>Enter Meal Details:</label>
  <input maxlength="50" required #newDetails>
</div>
<div>
  <label>Enter Meal Calories:</label>
  <input type="number" required #newCalories>
</div>
<div>
  <button (click)="addClicked(newName.value,newDetails.value,newCalories.value);
  newName.value='';
  newDetails.value='';
  newCalories.value='';
  ">Add</button>
  `
})
export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
    addClicked( name: string, details: string,  calories: number) {
        var newMealToAdd: Meal = new Meal(name, details, calories);
        this.newMealSender.emit(newMealToAdd);
  }
}
