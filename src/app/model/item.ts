export interface Item {
    itemId?: number;
    itemName: string;
    rentPerDay: number;
    finePerDay: number;
    availability?: boolean;
}
