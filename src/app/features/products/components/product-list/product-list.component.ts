import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from '../../../../models/shared/table-column.models';
import { getTableColumnCollection } from './product-list.component.config';
import { Product } from '../../../../models/products/product.model';
import { ProductService } from '../../services/product/product.service';
import { OrderService } from '../../../orders/services/order.service';
import { Order } from '../../../../models/orders/order.model';
import { SubSink } from 'subsink';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit, OnDestroy {
  isOrderSummary = false;
  placedOrder:Order | undefined;
	private subs = new SubSink();

	private readonly tableColumnCollection$$: BehaviorSubject<TableColumn[]> =
		new BehaviorSubject<TableColumn[]>([]);
   
	readonly tableColumnCollection$ =
		this.tableColumnCollection$$.asObservable();

    products: Product[] = [

    ];
    
    constructor(private productService: ProductService
      ,private orderService: OrderService) {
    
  }

  ngOnInit(): void {
		this.tableColumnCollection$$.next(
			getTableColumnCollection(),
		);
    
    this.productService.getProducts().subscribe(products => {
      this.products =  products
    });
	}

  ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

  placeOrder() {
    const selectedProducts = this.products.filter(product => product.isSelected);
    this.subs.sink = this.orderService.placeOrder(selectedProducts).subscribe(res =>{
      if(res){
        this.isOrderSummary = true;
        this.placedOrder = res;
      }
    });
  }
}
