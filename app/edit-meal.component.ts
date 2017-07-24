import{Component,Input,Output, EventEmitter} from'@angular/core';
import {Meal}from './meal.model';
@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf="childSelectedMeal">
      <h2>Edit Meal</h2>
      <div>
        <label>Enter Meal Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Enter Meal Details:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.detais">
      </div>
      <div>
        <label>Enter Meal Calories :</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div>
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>


  `
})
export class MealEditComponent {
@Input() childSelectedMeal:Meal[];
@Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }

}
