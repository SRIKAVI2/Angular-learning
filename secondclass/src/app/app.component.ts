import { Component } from '@angular/core'; // component is imported from angular framework
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // dependencies
  templateUrl: './app.component.html', // HTML for the component
  styleUrl: './app.component.css' //CSS for the component
})
export class AppComponent {
  title = 'secondclass';
}
