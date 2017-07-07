import { Component } from '@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <meal-list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"

  ></meal-list>
  <edit-meal
  [childSelectedMeal]= "selectedMeal"
  (doneClickedSender)="finishedEditing()"
  ></edit-meal>


  </div>
  `
})
export class AppComponent {
public masterMealList :Meal[]=[
  new Meal("Ugali","a big chunk", 100)

]
selectedMeal:Meal = null;
showDetails(clickedMeal: Meal) {
   this.selectedMeal = clickedMeal;
 }
 finishedEditing() {
   this.selectedMeal = null;
 }


}
