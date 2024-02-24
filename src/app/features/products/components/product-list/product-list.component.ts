import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { TableColumn } from '../../../../models/shared/table-column.models';
import { getTableColumnCollection } from './product-list.component.config';
import { Product } from '../../../../models/products/product.model';
import { ProductService } from '../../services/product/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  items: MenuItem[];
	private readonly tableColumnCollection$$: BehaviorSubject<TableColumn[]> =
		new BehaviorSubject<TableColumn[]>([]);
   
	readonly tableColumnCollection$ =
		this.tableColumnCollection$$.asObservable();

    products: Product[] = [

    ];
    
    constructor(private productService: ProductService) {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'Products',
        icon: 'pi pi-fw pi-list',
        routerLink: ['/product-list']
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
        routerLink: ['/about']
      }
    ];
  }

  ngOnInit(): void {
		this.tableColumnCollection$$.next(
			getTableColumnCollection(),
		);
    
    this.productService.getProducts().subscribe(products => {
      this.products =  products
    });
	}




  placeOrder() {
    const selectedProducts = this.products.filter(product => product.isSelected);

    console.log(selectedProducts); 
  }
}
