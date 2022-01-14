import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* import { threadId } from 'worker_threads'; */
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL : string = 'http://localhost:3000/products'
  constructor(
    private _http : HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this.apiURL)
  }
}
