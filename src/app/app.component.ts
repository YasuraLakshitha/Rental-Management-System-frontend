import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AddItemComponent} from "./components/add-item/add-item.component";
import {AddRentalComponent} from "./components/add-rental/add-rental.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      NavBarComponent,
      AddItemComponent,
      AddRentalComponent,
      AddCustomerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-system';
}
