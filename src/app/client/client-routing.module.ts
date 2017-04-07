import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OffersPageComponent} from "./offers-page/offers-page.component";
import {LoggedInGuard} from "../login/logged-in.guard";
import {MainComponent} from "../shared/components/main/main.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: 'client',
                    component: MainComponent,
                    children: [
                        {path: 'offers', component: OffersPageComponent},
                        {
                            path: 'orders',
                            loadChildren: 'app/client/orders/orders.module#OrdersModule',
                        }
                    ]
                    ,
                    canActivate: [LoggedInGuard]
                },


            ]
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
