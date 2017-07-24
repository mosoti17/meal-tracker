import{Component,Input,Output,EventEmitter} from'@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'meal-list',
  template: `
  <div class="row" align="center">
  <h2> List of Meals  <select (change)="onChange($event.target.value )"class="filter"id="select">
  <option value="all " selected="selected">Show All</option>
  <option value=">500calories"> Foods with more than 500 calories</option>
  <option value="<500calories">Foods with less than 500 calories </option>
</select></h2>
</div>
  <div *ngFor="let currentMeal of childMealList| calories:selectedCalories" class="col-md-3" id="list">
  <div id="name"><h3>{{currentMeal.name}}</h3></div>
  <div id="details"><p>{{currentMeal.detais}}</p></div>
  <div id="calories"><p>{{currentMeal.calories}}</p></div>



  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>

  `
})
export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCalories: string = "all";
  onChange(optionMenu) {
   this.selectedCalories = optionMenu;
   console.log(this.selectedCalories);
 }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
}


}
