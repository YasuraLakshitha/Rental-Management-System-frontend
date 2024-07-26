import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rental} from "../model/rental";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class RentalService {

    constructor(private http: HttpClient) {}

    saveRental(rental: Rental) {
        this.http.post("http://localhost:8080/rental/save", rental).subscribe()
    }

    findRentalById(id: number): Observable<Rental> {
        return this.http.get<Rental>(`http://localhost:8080/rental/byId?=${id}`);
    }

    updateRental(rental: Rental): void {
        this.http.put("http://localhost:8080/rental/update", rental).subscribe()
    }

    deleteRental(rental: Rental): void {
        this.http.delete("http://localhost:8080/rental/remove",{
            body: RentalService
        }).subscribe()
    }

    findAllRentals(): Observable<Rental[]> {
        return this.http.get<Rental[]>("http://localhost:8080/rental/rentals")
    }
}
