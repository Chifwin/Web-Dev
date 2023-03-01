import {Component, Input, OnInit} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  products = products;
  // @ts-ignore
  @Input categoryID: number;

  removeD(product: any) {
    product.shows = false;
  }

  like(product: any) {
    product.likes += 1;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
