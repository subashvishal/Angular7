import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IEmp } from "./IEmp";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private _url: string = "/assets/Emp.json";
  constructor(private http : HttpClient) { }
  getEmployee(): Observable<IEmp[]> 
{ 
return this.http.get<IEmp[]>(this._url)
  
} 
}
