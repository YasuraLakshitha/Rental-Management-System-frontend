import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ItemService {
    constructor(private http: HttpClient) {}

    saveItem(item: Item) {
        this.http.post("http://localhost:8080/item/save", item).subscribe()
    }

    findItemById(id: number): Observable<Item> {
        return this.http.get<Item>(`http://localhost:8080/item/byId?=${id}`);
    }

    updateItem(item: Item): void {
        this.http.put("http://localhost:8080/item/update", item).subscribe()
    }

    deleteItem(item: Item): void {
        this.http.delete("http://localhost:8080/item/remove",{
            body: item
        }).subscribe()
    }

    findAllItems(): Observable<Item[]> {
        return this.http.get<Item[]>("http://localhost:8080/item/items")
    }
}
