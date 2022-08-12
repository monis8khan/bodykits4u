import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsResponse } from '../interfaces/productsResponse';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {  
  url="https://script.googleusercontent.com/macros/echo?user_content_key=dZjcAYU7wxNmTXmZp28k3gLSmb0SzNMJNRK5m2VkAJP3wcQyFpl4zfAauDuC-BFmgmVelvwBpcep3m8l8giWGXkivAkJQ6A5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAAU42wo2moWZ_eGxkp9ic75XgDzYs8xCtSO5y6OX-JZzSmbIhLK-j2uXM9rpv6l-Nf244HnGYZQ0pr7CQpctrIxBnWUEMeDNQ&lib=MiL3kcr8xwJJHGH1p6WVrRdwZ_tohb_M8";
  constructor(private http:HttpClient) { }
  getProducts():Observable <ProductsResponse[]> {
    console.log('getting products');
    return this.http.get<ProductsResponse[]>(this.url)
  }

}
