import {Component} from '@angular/core';
import {ItemService} from "../../service/item-service";
import {Item} from "../../model/item";
import {NgForOf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-item-table',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './item-table.component.html',
    styleUrl: './item-table.component.css'
})
export class ItemTableComponent {

    protected itemList?: Item[];

    protected selectedItem: Item = {
        itemName: '',
        rentPerDay: 0,
        finePerDay: 0,
        availability: undefined
    }

    constructor(private service: ItemService) {
    }

    ngOnInit() {
        this.loadTable()
    }

    loadTable(): void {
        this.service.findAllItems().subscribe(
            data => this.itemList = data,
        );
    }

    onUpdateItem(item: Item) {
        this.selectedItem = item;
    }

    onSaveChanges(): void {
        this.service.updateItem(this.selectedItem);
    }

    onDeleteItem(item: Item): void {
       this.selectedItem = item;
    }

    onDeleteConfirm(): void {
        this.service.deleteItem(this.selectedItem);
    }
}
