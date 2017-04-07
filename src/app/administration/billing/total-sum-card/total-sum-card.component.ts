import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Order} from "../../../shared/model/Order";
import {TdDigitsPipe} from "@covalent/core";
import {getIconNameForMeal} from "../../../core/util/util.service";


interface INgxCategory {
    name: string,
    series: INgxDataPoint[]
}
interface INgxDataPoint {
    name: any;
    value: number;
}

@Component({
    selector: 'steak-total-sum-card',
    templateUrl: './total-sum-card.component.html',
    styleUrls: ['./total-sum-card.component.scss']
})
export class TotalSumCardComponent implements OnChanges {

    @Input()
    orders: Order[];

    total: number = 0;
    chartData: Array<any>;

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = true;
    showLegend: boolean = false;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = '';
    showYAxisLabel: boolean = true;
    yAxisLabel: string = 'Sales';

    orangeScheme: any = {
        domain: ['#BF360C', '#EF6C00', '#FB8C00', '#FFB300', '#FFCA28', '#FFF176'],
    };

    // line, area
    autoScale: boolean = true;

    constructor() {
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['orders'] && changes['orders'].currentValue) {
            let newVals = changes['orders'].currentValue;
            this.total = this.recalcTotal(newVals);
            this.chartData = this.recalcChartData(newVals);
            this.orders = newVals;
        }
    }

    recalcTotal(orders: Order[]): number {
        return orders.reduce((prev, curr) => {
            return prev + curr.amount
        }, 0)
    }

    recalcChartData(newVals: Order[]): Array<any> {
        let data: INgxCategory[] = [
            {name: 'meat', series: []},
            {name: 'vegetarian', series: []},
            {name: 'soup', series: []},
            {name: 'salad', series: []},
            {name: 'breakfast', series: []}
        ];
        newVals.forEach(order => {
            this.putChartDataPoint(order, data)
        });
        return data;
    }

    // ngx transform using covalent digits pipe
    axisDigits(val: any): any {
        return new TdDigitsPipe().transform(val);
    }
    

    private putChartDataPoint(order: Order, data: INgxCategory[]) {
        let category = getIconNameForMeal(order.offer);
        if(!category)return; //for those data points that contain dirty category data
        let series = data.find(elem => elem.name == category).series;
        let point = series.find(elem => elem.name.toString() == order.offer.date.toString());
        if(point) point.value+= order.amount;
        else series.push({value: order.amount, name: order.offer.date})
    }
}
