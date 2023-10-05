import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
  template: `

    <div classs="item-product">
      <img [src]="Product.photo" alt="">
      <p></p>
      <p>{{Product.product_name}}</p>
      <p>{{Product.qty}}</p>
</div>
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() Product!:Product
 
}
