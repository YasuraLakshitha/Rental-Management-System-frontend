import {Component} from '@angular/core';
import {CustomerService} from "../../service/customer-service";
import {Customer} from "../../model/customer";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-all-customers',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './all-customers.component.html',
    styleUrl: './all-customers.component.css'
})
export class AllCustomersComponent {

    protected customerList: Customer[] | undefined;

    protected selectedCustomer: Customer = {
        username: '',
        password: '',
    }

    constructor(private service: CustomerService) {
    }

    ngOnInit() {
        this.service.findAllCustomers().subscribe(
            data => this.customerList = data,
        )
    }

    onUpdateCustomer(customer: Customer): void {
        this.selectedCustomer = customer;
    }

    onSaveChanges(): void {
        this.service.updateCustomer(this.selectedCustomer)
    }

    onDeleteCustomer(customer: Customer): void {
        this.selectedCustomer = customer;
    }

    onDeleteConfirm(): void {
        this.service.deleteCustomer(this.selectedCustomer)
    }
}
