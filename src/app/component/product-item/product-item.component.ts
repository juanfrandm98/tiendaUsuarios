import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from 'src/app/model/product-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: ProductItem = new ProductItem(0, "", "", 0);
  productId: string | null = "";

  constructor (route: ActivatedRoute){
    this.productId = route.snapshot.paramMap.get('id');

  }

}
