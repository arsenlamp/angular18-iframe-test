import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  
import { AziAltComponent } from './azi-alt/azi-alt.component';  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AziAltComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'azi-alt-app';
}
