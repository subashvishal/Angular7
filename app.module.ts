import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsDetailComponent } from './departments-detail/departments-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeServiceService } from './employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentsDetailComponent,
    DepartmentListComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
