import { Routes } from '@angular/router';
import {AddItemComponent} from "./components/add-item/add-item.component";
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {AddRentalComponent} from "./components/add-rental/add-rental.component";
import {AllRentalsComponent} from "./components/all-rentals/all-rentals.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";
import {AllCustomersComponent} from "./components/all-customers/all-customers.component";

export const routes: Routes = [
    {
        path: '',
        component:AddItemComponent
    },
    {
        path: 'add-item',
        component: AddItemComponent
    },
    {
        path: 'item-table',
        component:ItemTableComponent
    },
    {
        path: 'add-rental',
        component: AddRentalComponent
    },
    {
        path: 'rental-table',
        component: AllRentalsComponent
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent
    },
    {
        path: 'customer-table',
        component: AllCustomersComponent
    }
];
