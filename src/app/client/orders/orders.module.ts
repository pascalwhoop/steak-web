import {NgModule} from "@angular/core";
import {OrdersPageComponent} from "./orders-page/orders-page.component";
import {RouterModule} from "@angular/router";
import {OrdersSummaryCardComponent} from "./orders-summary-card/orders-summary-card.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [

        SharedModule,
        RouterModule.forChild([{path: '', component: OrdersPageComponent}])
    ],
    declarations: [OrdersPageComponent, OrdersSummaryCardComponent]
})
export class OrdersModule {
}
