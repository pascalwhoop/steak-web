import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../shared/model/Order";

@Component({
  selector: 'steak-average-sum-per-employee-card',
  templateUrl: './average-sum-per-employee-card.component.html',
  styleUrls: ['./average-sum-per-employee-card.component.scss']
})
export class AverageSumPerEmployeeCardComponent implements OnInit {

  @Input()
  orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
