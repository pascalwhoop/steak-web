import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OffersPageComponent} from "./offers-page/offers-page.component";
import {SidenavComponent} from "../shared/components/sidenav/sidenav.component";
import {OrdersPageComponent} from "./orders-page/orders-page.component";
import {BillingPageComponent} from "./billing-page/billing-page.component";
import {LoggedInGuard} from "../login/logged-in.guard";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: 'client',
                    component: SidenavComponent,
                    children: [
                        {path: 'offers', component: OffersPageComponent},
                        {path: 'orders', component: OrdersPageComponent},
                        {path: 'billing', component: BillingPageComponent}
                    ]
                    ,
                    canActivate: [LoggedInGuard]
                }

            ]
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
