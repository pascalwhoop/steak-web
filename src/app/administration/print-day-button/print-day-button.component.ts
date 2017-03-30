import {Component, OnInit, Input} from '@angular/core';
import {OrdersApi} from "../../shared/api/endpoints/OrdersApi";
import {PrintService} from "../../print/print.service";

@Component({
  selector: 'steak-print-day-button',
  templateUrl: './print-day-button.component.html',
  styleUrls: ['./print-day-button.component.scss']
})
export class PrintDayButtonComponent implements OnInit {

  @Input()
  date: Date;

  constructor(public ordersApi: OrdersApi, public printService: PrintService) { }

  ngOnInit() {
  }

}
