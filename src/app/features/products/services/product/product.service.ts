// productService.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../../../../models/products/product.model';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/product/all');
  }
}
