import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from './products'
@Injectable({
  providedIn: 'root'
})

export class DataService {  

  url = 'https://efa-gardenapp-backend.herokuapp.com/api/product'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    console.log(this.url)
    return this.http.get<Products[]>(this.url)
      .pipe(  
        map(data => { return data['results'] })
      )
  }
}

