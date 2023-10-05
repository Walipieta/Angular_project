import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    ProductComponent,
  
  ],
  template: `
    <section>
      <form>
        <input type="text">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location [Housinglocation]="Housinglocation"></app-housing-location>
    </section>
    <section classs="listing-products">
      <app-product [Product]="Product"></app-product>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


    //readonly baseUrl ='https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png';
    Housinglocation: Housinglocation = {
      id: 999 ,
      name: 'Test',
      city: 'Gdansk',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
      availableUnit: 50,
      wifi: true,
      laundry: false,

    }

    Product: Product = {
      id: 1 , 
      product_name: "czekolada",
      price: 50,
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
      qty: 250,
      available: true,
    }

}
