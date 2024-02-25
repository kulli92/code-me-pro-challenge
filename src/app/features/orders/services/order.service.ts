import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../../models/orders/order.model';
import { Observable } from 'rxjs';
import { Product } from '../../../models/products/product.model';
import { environment } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  placeOrder(products: Product[]): Observable<Order> {
    return this.http.post<Order>(this.apiUrl + '/order',products);
  }
}
