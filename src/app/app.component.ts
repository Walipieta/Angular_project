import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule
    
   
  ],
  template: `
  <!-- Komponent app -->
  <main>
    
    <header class="brand-name">
    <a [routerLink]="['/']">
      <img class="brand-logo" src="/assets/logo.svg">
</a>
    </header>
    <section class="content">
      <router-outlet> </router-outlet>
      </section>
  



  </main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kacperlatarski';
}
