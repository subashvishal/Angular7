import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department List</h3>
  <ul class="items">
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
     <span class="badge">{{department.id}}</span> {{department.name}}
    </li>
    </ul>  
    `,
  styles: [`
    .dl{
    color: darkgray;
    text-align: left;
    }


    h1 {
      color: #369; 
      font-family: Arial, Helvetica, sans-serif;   
      font-size: 250%;
    }
    h2, h3 { 
      color: #444;
      font-family: Arial, Helvetica, sans-serif;   
      font-weight: lighter;
    }
    body { 
      margin: 2em; 
    }
    body, input[text], button { 
      color: #888; 
      font-family: Cambria, Georgia; 
    }
    a {
      cursor: pointer;
      cursor: hand;
    }
    button {
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
    
    /* Navigation link styles */
    nav a {
      padding: 5px 10px;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      background-color: #eee;
      border-radius: 4px;
    }
    nav a:visited, a:link {
      color: #607D8B;
    }
    nav a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }
    nav a.active {
      color: #039be5;
    }
    
    /* items class */
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
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments=[
    {'id':1, "name":"Testing"},
    {'id':2, "name":"Verification"},
    {'id':3, "name":"Software"},
    {'id':4, "name":"Hardware"}
  ];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap.subscribe((params:ParamMap) => {
   let id = parseInt(params.get('id'));
   this.selectedId = id
   });
  }

  onSelect(department)
  {
    this.router.navigate(['/Department', department.id]);
  }

  isSelected(department){
    return department.id === this.selectedId;
  }
}
