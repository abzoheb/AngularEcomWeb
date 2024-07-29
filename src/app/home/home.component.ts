import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/layouts/header/header.component';
import { FooterComponent } from '../shared/layouts/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
