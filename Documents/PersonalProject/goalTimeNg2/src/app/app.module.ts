import { BrowserModule } from '@angular/platform-browser';
import { NgModule, animate, transition } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
// import { Task } from './task';
import { TaskAddComponent } from './task/task-add.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ValidationMessagesComponent } from './task/validation-messages.component';
import { ValidationService } from './task/validation.service';
import { HttpResultComponent } from './task/http-result.component';
import { TaskDataService } from './task-data.service';
import { TaskListComponent } from './task/task-list.component';
//import {ToasterComponent, ToastComponent, ToasterService} from 'angular2-toastr/index';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ToastyModule} from 'ng2-toasty';
import { TaskDetailComponent } from './task/task-detail.component';



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  // Task,
  TaskAddComponent,
  WelcomeComponent,
  ValidationMessagesComponent,
  HttpResultComponent,
  TaskListComponent,
  TaskDetailComponent
  // ToasterComponent,
  // ToastComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  MaterialModule.forRoot(),
  ReactiveFormsModule,
  routing,
  BrowserModule,
   ToastyModule.forRoot()
  //  HammerJs
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
