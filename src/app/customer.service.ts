import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './Customer';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class CustomerService {
  private apiServerUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient){}

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/account/all`);
  }
  public getCustomer(Id: any): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiServerUrl}/account/${Id}`);
  }

}