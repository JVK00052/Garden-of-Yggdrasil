import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { Products } from '../models/product'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'  
})
export class DataService {
  
private productUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
private adminUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productUrl)
  }

  getLogin(admin: Admin): Observable<Admin[]> {
    return this.http.post<Admin[]>(this.adminUrl, admin)
  }
  delete(id: any): Observable<Products> {
    let url=`https://efa-gardenapp-backend.herokuapp.com/api/product/${id}`
    return this.http.delete<Products>(url, httpOptions)  
  }
}

