import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  private readonly API_URL =
    'https://5wvf7b1187.execute-api.us-west-2.amazonaws.com/default/interviewTest';
  
    constructor(private http: HttpClient) { }
  
    getEmployee(id: number): Observable<any> {
      return this.http.get(`${this.API_URL}/${id}`);
    }
  
    createEmployee(employee: Object): Observable<Object> {
      return this.http.post(`${this.API_URL}`, employee);
    }
  
    updateEmployee(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.API_URL}/${id}`, value);
    }
  
    deleteEmployee(id: number): Observable<any> {
      return this.http.delete(`${this.API_URL}/${id}`, { responseType: 'text' });
    }
  
    getEmployeesList(): Observable<any> {
      return this.http.get(`${this.API_URL}`);
    }
  
}


