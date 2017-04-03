import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OffersPageComponent} from "./offers-page/offers-page.component";
import {ClientRoutingModule} from "./client-routing.module";
import {SharedModule} from "../shared/shared.module";
import { OfferItemComponent } from './offer-item/offer-item.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { DayOffersCardComponent } from './day-offers-card/day-offers-card.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ClientRoutingModule
    ],
    declarations: [OffersPageComponent, OfferItemComponent, BillingPageComponent, ClientHomeComponent, DayOffersCardComponent],
    
})
export class ClientModule {
}
