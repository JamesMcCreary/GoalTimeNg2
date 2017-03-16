import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // Task,
    TaskAddComponent,
    WelcomeComponent,
    ValidationMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    routing
  //  HammerJs
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
