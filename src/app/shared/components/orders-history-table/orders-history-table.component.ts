import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Order} from "../../model/Order";
import {
    ITdDataTableColumn, ITdDataTableSortChangeEvent, TdDataTableService,
    TdDataTableSortingOrder
} from "@covalent/core";

@Component({
    selector: 'steak-orders-history-table',
    templateUrl: './orders-history-table.component.html',
    styleUrls: ['./orders-history-table.component.scss']
})
export class OrdersHistoryTableComponent implements OnInit, OnChanges {

    @Input('orders')
    orders: Order[];

    @Input()
    columns: ITdDataTableColumn[];

    filteredData: IOrderHistoryData[];
    filteredTotal: number;

    searchTerm: string = '';
    sortBy: string = 'date';
    sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

    constructor(public dataTableService: TdDataTableService) {
    }

    ngOnInit(): void {
        this.filteredData = this.filter();
    }

    sort(sortEvent: ITdDataTableSortChangeEvent): void {
        this.sortBy = sortEvent.name;
        this.sortOrder = sortEvent.order;
        this.filteredData = this.filter();
    }

    search(searchTerm: string): void {
        this.searchTerm = searchTerm;
        this.filteredData = this.filter();
    }

    filter(data?: Order[]): IOrderHistoryData[] {

        if (!this.orders || this.orders.length < 1) return;
        let newData = this.orders.map(order => this.generateRowFrom(order));
        newData = this.dataTableService.filterData(newData, this.searchTerm, true);
        this.filteredTotal = newData.length;
        newData = this.dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        return newData;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            this.orders = changes['orders'].currentValue;
            this.filteredData = this.filter();
        }
    }


    private generateRowFrom(order: Order): IOrderHistoryData {

        return {
            date: order.offer.date,
            description: order.offer.description,
            vegetarian: order.offer.vegetarian,
            paid: order.paid,
            amount: order.amount,
            user: order.employee_id
        }

    }
}

interface IOrderHistoryData {
    date: Date | string;
    description: string;
    vegetarian: boolean;
    paid: boolean;
    amount: number;
    user?: string;
}
