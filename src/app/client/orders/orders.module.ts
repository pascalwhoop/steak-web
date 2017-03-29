import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrdersPageComponent} from "./orders-page/orders-page.component";
import {RouterModule} from "@angular/router";
import {OrdersSummaryCardComponent} from "./orders-summary-card/orders-summary-card.component";
import {OrdersHistoryTableComponent} from "./orders-history-table/orders-history-table.component";
import {SharedModule} from "../../shared/shared.module";
import {
    CovalentCoreModule, CovalentCommonModule, CovalentDataTableModule, CovalentSearchModule,
    TdDataTableService
} from "@covalent/core";

@NgModule({
    imports: [
        CovalentCoreModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: OrdersPageComponent}])
    ],
    declarations: [OrdersPageComponent, OrdersSummaryCardComponent, OrdersHistoryTableComponent]
})
export class OrdersModule {
}
