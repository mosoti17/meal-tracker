import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import{MealListComponent}from './meal-list.component';
import{MealEditComponent}from './edit-meal.component';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [ AppComponent,MealListComponent,MealEditComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
