import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [

 { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: TemplatedrivenComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
