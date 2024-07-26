import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RentalService} from "../../service/rental-service";
import {Rental} from "../../model/rental";

@Component({
    selector: 'app-add-rental',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './add-rental.component.html',
    styleUrl: './add-rental.component.css'
})
export class AddRentalComponent {
    constructor(private service: RentalService) {
    }

    protected rental: Rental = {
        rentalDate: undefined,
        returnDate: undefined,
        rentalDueDate: undefined,
        rentalAmount: 0
    }

    onAddRental() {
        this.service.saveRental(this.rental);
    }
}
