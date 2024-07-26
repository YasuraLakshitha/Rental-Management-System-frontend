import {Component} from '@angular/core';
import {RentalService} from "../../service/rental-service";
import {CustomerService} from "../../service/customer-service";
import {Customer} from "../../model/customer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-add-customer',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './add-customer.component.html',
    styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
    constructor(private service: CustomerService) {
    }

    customer: Customer = {
        username: '',
        password: '',
        customerName: undefined,
        customerEmail: undefined,
    }

    onSaveCustomer(): void {
        this.service.saveCustomer(this.customer);
    }
}
