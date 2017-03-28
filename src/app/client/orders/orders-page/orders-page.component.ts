import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../../shared/services/page-title.service";
import {OrdersApi} from "../../../shared/api/endpoints/OrdersApi";
import {UserService} from "../../../login/user.service";
import {Order} from "../../../shared/model/Order";

@Component({
    selector: 'steak-orders-page',
    templateUrl: 'orders-page.component.html',
    styleUrls: ['orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

    orders: Order[];

    constructor(public title: PageTitleService, public ordersApi: OrdersApi, public userService: UserService) {
    }

    ngOnInit() {
        this.title.title = "Orders";
        this.fetchOffers();
    }

    private fetchOffers() : void{
        let usr = this.userService.username;
        this.ordersApi.ordersGET(null, null, null, usr)
            .subscribe(offers => this.orders = offers);
    }
}
