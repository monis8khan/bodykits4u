import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {  
  url="https://fakestoreapi.com/products";
  constructor(private http:HttpClient) { }
  getProducts():Observable <any[]> {
    console.log('getting products')
    return this.http.get<any[]>(this.url);
  }

}
