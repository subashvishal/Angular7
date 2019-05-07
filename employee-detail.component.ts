import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2 >Employee Details : </h2> 
  <div *ngFor="let employee of employees">
  <span (click)="goDeatil(employee)" [class.selected]="isSelected(employee)" >
  <h1>UniqueId</h1>{{employee.id}} <h1>Name</h1> {{employee.name}} <h1>Age</h1>
   {{employee.age}}</span>
   </div>
   
    
  `,
  styles: [
      `div {
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #aaa; 
    cursor: auto;
  }`]
})
export class EmployeeDetailComponent implements OnInit {

  public selectedId;
public employeeId;

  constructor(private route : ActivatedRoute, private router: Router) { }

  employees=[
    {"id" : 1, "name" : "Subash", "age":23},
    {"id" : 2, "name" : "Ram", "age":22},
    {"id" : 3, "name" : "Prem", "age":28},
    {"id" : 4, "name" : "Reddy", "age":26},
    {"id" : 5, "name": "Alex", "age" : 28},
    {"id" : 6, "name": "Arjun", "age" : 21},
    {"id" : 7, "name": "Sha", "age" : 34}
  ];
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId=id;
      this.selectedId=id;
      });
  }

  goDetail(employee){
    this.router.navigate(['/Employee', employee.get('id')]);
  }
  isSelected(employee){
    return employee.id === this.selectedId;
  }
}
