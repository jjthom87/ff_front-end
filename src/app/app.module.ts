import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';

import { AppRouter } from './app.routing';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [BrowserModule, AppRouter, FormsModule, ReactiveFormsModule, HttpClientModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
