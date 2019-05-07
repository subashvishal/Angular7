import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-departments-detail',
  template: `
     <h3>Your Selected department is {{departmentId}}</h3>
     <a (click)="goPrevious()">Previous</a> <br>
     <a (click)="goNext()">Next</a>
<div>
     <button (click)="gotoDepartment()">Back</button>
     </div>
     `,
  styles: [ `h3 { 
    color: #444;
    font-family: Arial, Helvetica, sans-serif;   
    font-weight: lighter;

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
  }`]
})
export class DepartmentsDetailComponent implements OnInit {

  public departmentId ;
  public selectedId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
  
  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.departmentId=id;
    this.selectedId=id;
  });
}
  

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/Department', previousId]);
  }

  goNext(){
    let NextId = this.departmentId + 1;
    this.router.navigate(['/Department', NextId]);
  }

  gotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/Department', {id:selectedId }])
  }

}
