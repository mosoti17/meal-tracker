import { Component } from '@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <h1>Meal Tracker</h1>
  <div class="row">
  <div class="col-md-9"id="main">


  <meal-list
  [childMealList]="masterMealList"
  (clickSender)="showDetails($event)"

  ></meal-list>
  </div >
  <div class="col-md-3" >
  <div class="row new-meal">
  <new-meal
  (newMealSender)="addMeal($event)"
  ></new-meal>
  </div>
  <div class="row edit">
  <edit-meal
  [childSelectedMeal]= "selectedMeal"
  (doneClickedSender)="finishedEditing()"
  ></edit-meal>
</div>
    </div>
  </div>
  `
})
export class AppComponent {
public masterMealList :Meal[]=[
  new Meal("Ugali","a big chunk", 100),
  new Meal("Chapati and Beans","2 chapatis and a plate of beans", 600),
  new Meal("Cheese Burger","Double party burger with extra cheese", 1000),
  new Meal("Milkshake","one 500ml milkshake", 200),
  new Meal("Ugali","a big chunk", 100),
  new Meal("Chapati and Beans","2 chapatis and a plate of beans", 600),
  new Meal("Cheese Burger","Double party burger with extra cheese", 1000),
  new Meal("Milkshake","one 500ml milkshake", 200)



]
selectedMeal:Meal = null;
showDetails(clickedMeal: Meal) {
   this.selectedMeal = clickedMeal;
 }
 finishedEditing() {
   this.selectedMeal = null;
 }
 addMeal(newMealFromChild: Meal){
   this.masterMealList.push(newMealFromChild)
 }


}
