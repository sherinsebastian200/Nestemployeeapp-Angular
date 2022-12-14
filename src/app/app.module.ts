import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployLoginComponent } from './employ-login/employ-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewEmployComponent } from './view-employ/view-employ.component';
import { NavBar2Component } from './nav-bar2/nav-bar2.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addemploy",
    component:AddEmployComponent
  },
  {
    path:"viewtask",
    component:ViewTaskComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  },
  {
    path:"employlogin",
    component:EmployLoginComponent
  },
  {
    path:"empview",
    component:ViewEmployComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EmployLoginComponent,
    NavBarComponent,
    ViewEmployComponent,
    NavBar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
