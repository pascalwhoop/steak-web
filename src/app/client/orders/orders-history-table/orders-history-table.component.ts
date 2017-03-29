import {Component, OnInit, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";
import {
    ITdDataTableColumn,
    TdDataTableSortingOrder,
    IPageChangeEvent,
    ITdDataTableSortChangeEvent,
    TdDataTableService
} from "@covalent/core";
import {Offer} from "../../../shared/model/Offer";

@Component({
    selector: 'steak-orders-history-table',
    templateUrl: './orders-history-table.component.html',
    styleUrls: ['./orders-history-table.component.scss']
})
export class OrdersHistoryTableComponent implements OnInit, OnChanges {

    @Input('orders')
    data: Order[];

    columns: ITdDataTableColumn[] = [
        {name: 'date', label: 'Date', tooltip: 'date ordered'},
        {name: 'description', label: 'Description'},
        {name: 'amount', label: 'Price'},
        {name: 'vegetarian', label: 'Vegetarian'},
        {name: 'paid', label: 'Paid'}
    ];

    filteredData: IOrderHistoryData[];
    filteredTotal: number;

    searchTerm: string = '';
    sortBy: string = 'date';
    sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

    constructor(public _dataTableService: TdDataTableService) {
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

    filter(): IOrderHistoryData[] {
        if(!this.data || this.data.length < 1) return;
        let newData = this.data.map(order => this.generateRowFrom(order));
        newData = this._dataTableService.filterData(newData, this.searchTerm, true);
        this.filteredTotal = newData.length;
        newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        return newData;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            this.filter();
        }
    }


    private generateRowFrom(order: Order): IOrderHistoryData {
        
        return {
            date: order.offer.date,
            description: order.offer.description,
            vegetarian: order.offer.vegetarian,
            paid: order.paid,
            amount: order.amount
        }

    }
}

interface IOrderHistoryData {
    date: Date | string;
    description: string;
    vegetarian: boolean;
    paid: boolean;
    amount: number;

}
