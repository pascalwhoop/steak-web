import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OffersPageComponent} from "./offers-page/offers-page.component";
import {ClientRoutingModule} from "./client-routing.module";
import {SharedModule} from "../shared/shared.module";
import { OfferItemComponent } from './offer-item/offer-item.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { BillingPageComponent } from './billing-page/billing-page.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClientRoutingModule
    ],
    declarations: [OffersPageComponent, OfferItemComponent, OrdersPageComponent, BillingPageComponent],
    
})
export class ClientModule {
}
