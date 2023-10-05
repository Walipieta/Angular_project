import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';


@Injectable({
  providedIn: 'root'
})


export class HousingService {


    //readonly baseUrl ='https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png';
    protected HousinglocationList: Housinglocation [] =  [




     {
      id: 1 ,
      name: 'Test1',
      city: 'Gdansk',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
      },
      {
        id: 2 ,
        name: 'Test2',
        city: 'Gdansk',
        state: 'PL',
        photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
        availableUnit: 50,
        wifi: true,
        laundry: false
        },


        {
          id: 3 ,
          name: 'Test3',
          city: 'Gdansk',
          state: 'PL',
          photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
          availableUnit: 50,
          wifi: true,
          laundry: false
        },
        {
            id: 4 ,
            name: 'Test4',
            city: 'Gdansk',
            state: 'PL',
            photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
            availableUnit: 50,
            wifi: true,
            laundry: false
          },
          {
              id: 5 ,
              name: 'Test5',
              city: 'Gdansk',
              state: 'PL',
              photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
              availableUnit: 50,
              wifi: true,
              laundry: false
          },
          {
                id: 6 ,
                name: 'Test6',
                city: 'Gdansk',
                state: 'PL',
                photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v159317420/8546.png',
                availableUnit: 50,
                wifi: true,
                laundry: false
          }
      

      ];
      getAllHousingLocation(): Housinglocation[]  {
        return this.HousinglocationList;
      }

      getHousingLocationById(id:number): Housinglocation | 
      undefined {
        return this.HousinglocationList.find(Housinglocation =>
          Housinglocation.id === id)
      }
    }

