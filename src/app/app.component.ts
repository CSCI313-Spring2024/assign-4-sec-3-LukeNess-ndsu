import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
}
