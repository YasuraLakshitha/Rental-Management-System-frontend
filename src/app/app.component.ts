import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AddItemComponent} from "./components/add-item/add-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      NavBarComponent,
      AddItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system';
}
