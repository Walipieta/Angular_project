import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,
  RouterModule
],
  template: `
  <article>
    <img [src]="housingLocation?.photo"  alt="">,
    <h2 class="listing-heading">
      {{housingLocation?.name}}
   </h2>
   
<p> {{housingLocation?.city}}</p>
<p> {{housingLocation?.wifi}}</p>
<p> {{housingLocation?.laundry}}</p>
<p> {{housingLocation?.state}}</p>






</article>`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService)
  housingLocation: Housinglocation | undefined

  constructor(){
    const housingLocationId =Number(this.route.snapshot.params['id']);



    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  } 



}
