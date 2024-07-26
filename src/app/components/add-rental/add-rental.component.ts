import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RentalService} from "../../service/rental-service";
import {Rental} from "../../model/rental";
import {CustomerService} from "../../service/customer-service";
import {Customer} from "../../model/customer";
import {NgForOf} from "@angular/common";
import {ItemService} from "../../service/item-service";
import {Item} from "../../model/item";

@Component({
    selector: 'app-add-rental',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        NgForOf
    ],
    templateUrl: './add-rental.component.html',
    styleUrl: './add-rental.component.css'
})
export class AddRentalComponent {

    protected customerList:Customer[]|undefined;

    protected itemList:Item[]|undefined;

    constructor(private service: RentalService,private customerService: CustomerService,private itemService: ItemService) {
    }

    ngOnInit() {
        this.loadCustomerList();
        this.loadItemList();
    }

    loadCustomerList(): void {
        this.customerService.findAllCustomers().subscribe(
            data => this.customerList = data,
        )
    }

    protected rental: Rental = {
        rentalDate: undefined,
        customerId: undefined,
        returnDate: undefined,
        rentalDueDate: undefined,
        rentalAmount: 0
    }
    quantity: number | undefined;



    onAddRental() {
        this.service.saveRental(this.rental);
    }

    private loadItemList() {
        this.itemService.findAllItems().subscribe(
            data => this.itemList = data,
        )
    }
}
