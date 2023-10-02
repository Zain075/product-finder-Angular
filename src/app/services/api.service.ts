import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProducts } from 'src/model/myProducts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProducts():Observable<MyProducts>{
    return this.http.get('https://dummyjson.com/products')
  }
}
