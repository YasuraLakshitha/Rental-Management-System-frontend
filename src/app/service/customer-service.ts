import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CustomerService {
    constructor(private http: HttpClient) {}

    saveCustomer(customer: Customer) {
        this.http.post("http://localhost:8080/customer/save", customer).subscribe()
    }

    findCustomerById(id: number): Observable<Customer> {
        return this.http.get<Customer>(`http://localhost:8080/customer/byId?=${id}`);
    }

    updateCustomer(customer: Customer): void {
        this.http.put("http://localhost:8080/customer/update", customer).subscribe()
    }

    deleteCustomer(customer: Customer): void {
        this.http.delete("http://localhost:8080/customer/remove",{
            body: customer
        }).subscribe()
    }

    findAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>("http://localhost:8080/customer/customers")
    }
}
