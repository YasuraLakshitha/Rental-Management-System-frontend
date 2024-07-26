import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RentalService} from "../../service/rental-service";
import {Rental} from "../../model/rental";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-all-rentals',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './all-rentals.component.html',
  styleUrl: './all-rentals.component.css'
})
export class AllRentalsComponent {
    constructor(private service: RentalService) {}

    protected rentals: Rental[] | undefined;

    protected selecctedRental: Rental = {
      rentalDate: undefined,
      returnDate: undefined,
      rentalDueDate: undefined,
      rentalAmount: undefined,
    };

    ngOnInit(): void {
      this.loadTable();
    }

    loadTable(): void {
      this.service.findAllRentals().subscribe(
          data => this.rentals = data
      )
    }

  onUpdateRental(rental: Rental): void {
    this.selecctedRental = rental;
  }

  onSaveChanges() {
    this.service.updateRental(this.selecctedRental)
  }

  onDelete() {
    this.service.deleteRental(this.selecctedRental)
  }
}
