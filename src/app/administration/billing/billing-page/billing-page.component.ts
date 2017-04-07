import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../login/user.service";
import {OrdersApi} from "../../../shared/api/endpoints/OrdersApi";
import {PageTitleService} from "../../../shared/services/page-title.service";
import {ITdDataTableColumn} from "@covalent/core";
import {Order} from "../../../shared/model/Order";

@Component({
  selector: 'steak-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.scss']
})
export class BillingPageComponent implements OnInit {

  orders: Order[];
  columns: ITdDataTableColumn[] = [
    {name: 'date', label: 'Date', tooltip: 'date ordered'},
    {name: 'description', label: 'Description'},
    {name: 'amount', label: 'Price'},
    {name: 'vegetarian', label: 'Vegetarian'},
    {name: 'paid', label: 'Paid'},
    {name: 'user', label: "Employee code"}
  ];

  constructor(public title: PageTitleService, public ordersApi: OrdersApi, public userService: UserService) {
  }

  ngOnInit() {
    this.title.title = "Billing";
    this.fetchOffers();
  }

  private fetchOffers() : void{
    //get all orders that have not yet been paid
    this.ordersApi.ordersGET(null, null, null, null, true)
        .subscribe(offers => this.orders = offers);
  }

}
