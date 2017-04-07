import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../shared/model/Order";

@Component({
  selector: 'steak-total-sum-card',
  templateUrl: './total-sum-card.component.html',
  styleUrls: ['./total-sum-card.component.scss']
})
export class TotalSumCardComponent implements OnInit {

  @Input()
  orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
