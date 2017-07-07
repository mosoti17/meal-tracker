import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { CaloriesPipe } from './calories.pipe';
import{MealListComponent}from './meal-list.component';
import{MealEditComponent}from './edit-meal.component';
import{NewMealComponent}from './new-meal.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [ AppComponent,MealListComponent,MealEditComponent,NewMealComponent,CaloriesPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
