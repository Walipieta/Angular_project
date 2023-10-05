import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    
   
  ],
  template: `
  <!-- Komponent app -->
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg">
    </header>
    <section class="content">
      <!-- import komponentu home -->
      <app-home></app-home>
      </section>
  



  </main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kacperlatarski';
}
