import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransferMonyService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public transferMoney(transfer: Object): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
   return  this.http.post<any>(`${this.apiServerUrl}/transfer`, transfer,requestOptions);
  }
}
