import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ {path:'' , redirectTo:'employee' , pathMatch:"full"},
{path:'employee' , component : DisplayEmployeeComponent , pathMatch:"full"},
{path:'employee/add' , component : FormEmployeeComponent   , pathMatch:"full"},
{path:'employee/edit/:id' , component : FormEmployeeComponent , pathMatch:"full"},
{path:'login', component:LoginComponent , pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
