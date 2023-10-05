import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-komponent-aboutus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      komponent-aboutus works!
    </p>
  `,
  styleUrls: ['./komponent-aboutus.component.css']
})
export class KomponentAboutusComponent {

}
