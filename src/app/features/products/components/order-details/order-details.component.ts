import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../../models/orders/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: Order | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
