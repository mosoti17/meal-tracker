import{Component,Input,Output,EventEmitter} from'@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
  <h2>{{currentMeal.name}}</h2>
  <p>{{currentMeal.detais}}</p>
  <p>{{currentMeal.calories}}</p>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>

  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
}


}
