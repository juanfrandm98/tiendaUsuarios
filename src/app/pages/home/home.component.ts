import { Component } from '@angular/core';
import { ProductItem } from 'src/app/model/product-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productItems: Array<ProductItem> = [
    new ProductItem(1, "libro", "un libro", 25),
    new ProductItem(2, "cd", "un cd", 20),
    new ProductItem(3, "poster", "un poster", 10)
  ];
}
