import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  
  ],
  template: `
    <section>
      <form>
        <input type="text" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location  *ngFor="let Housinglocation of filteredLoocationList" [Housinglocation]="Housinglocation"></app-housing-location>
    </section>
    <section classs="listing-products">
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLoocationList: Housinglocation[] = []


   constructor(){

    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) =>{

      this.housingLocationList = housingLocationList;
      this.filteredLoocationList = this.filteredLoocationList;
    })

    // this.housingLocationList = this.housingService.
    // getAllHousingLocation();
    // this.filteredLoocationList =this.housingLocationList;
  }


  filterResults(text:string){
    if(!text){
      this.filteredLoocationList
    }


    this.filteredLoocationList = this.housingLocationList.filter(
      HousingLocation => HousingLocation?.city.toLowerCase().includes
      (text.toLowerCase())
    )
  }
}


  
    

    


