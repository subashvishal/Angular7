import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';



@Component({
  selector: 'app-employee-list',
  template: `
    
  <h3>Employee List</h3>
  <ul class="items">
    <li (click)="onSelect(employee)" [class.selected]="isSelected(employee)" *ngFor="let employee of employees">
     <span class="badge">{{employee.id}}</span> {{employee.name}}
    </li>
    </ul>  

    <!-- <a (click)="firstEmp(employee)">Subash</a><br>
     <a (click)="firstEmp(employee)">Prem</a><br>
     <a (click)="firstEmp(employee)">Ram</a><br>
     <a (click)="firstEmp(employee)">Arjun</a><br>
     <a (click)="firstEmp(employee)">Reddy</a>  -->
      
  `,
  styles: [`
 nav a {
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
  }

  .items {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding-left: 0;
    width: 10em;
  }
  .items li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em;
    height: 1.6em;
    border-radius: 4px;
  }
  .items li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .items li.selected:hover {
    background-color: #BBD8DC;
    color: white;
  }
  
  .items .text {
    position: relative;
    top: -3px;
  }
  
  .items li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em;
    height: 1.6em;
    border-radius: 4px;
  }
  
  .items .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  .items li.selected {
    background-color: #CFD8DC;
    color: white;
  }
        `]
})
export class EmployeeListComponent implements OnInit {
  public selectedId;
 employees=[
    {"id" : 1, "name" : "Subash", "age":23},
    {"id" : 2, "name" : "Ram", "age":22},
    {"id" : 3, "name" : "Prem", "age":28},
    {"id" : 4, "name" : "Reddy", "age":26},
    {"id" : 5, "name": "Alex", "age" : 28},
    {"id" : 6, "name": "Arjun", "age" : 21},
    {"id" : 7, "name": "Sha", "age" : 34}
];

  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId=id;
      });
    
  }

  onSelect(employee){
    this.router.navigate(['/Employee', employee.id]);
  }

  isSelected(employee){
  return employee.id === this.selectedId;
}
}