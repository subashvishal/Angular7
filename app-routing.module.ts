import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeServiceService } from './employee-service.service';


const routes: Routes = [
  //{path :'', redirectTo:'/Department', pathMatch: 'full'},
  {path : 'Department/:id', component:DepartmentsDetailComponent},
  {path : 'Department', component:DepartmentListComponent},
  {path : 'Employee', component:EmployeeListComponent},
  {path : 'Employee/:id', component:EmployeeDetailComponent},
  {path : '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,DepartmentsDetailComponent,EmployeeDetailComponent,PageNotFoundComponent ];