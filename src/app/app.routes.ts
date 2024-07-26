import { Routes } from '@angular/router';
import {AddItemComponent} from "./components/add-item/add-item.component";
import {ItemTableComponent} from "./components/item-table/item-table.component";
import {AddRentalComponent} from "./components/add-rental/add-rental.component";
import {AllRentalsComponent} from "./components/all-rentals/all-rentals.component";

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
    }
];
