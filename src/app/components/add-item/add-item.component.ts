import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ItemService} from "../../service/item-service";
import {Item} from "../../model/item";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-add-item',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './add-item.component.html',
    styleUrl: './add-item.component.css'
})
export class AddItemComponent {
    constructor(private service: ItemService) {
    }

    protected item: Item = {
        itemName: '',
        rentPerDay: 0,
        finePerDay: 0
    }

    onAddItem(): void {
        this.service.saveItem(this.item);
    }
}
