import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {SharedModule} from "../shared/shared.module";
import {OfferFormDialogComponent} from "./offer-form-dialog/offer-form-dialog.component";
import { AdminOfferItemComponent } from './admin-offer-item/admin-offer-item.component';
import {CacheModule} from "../cache/cache.module";
import { OfferDescriptionAutoCompleteComponent } from './offer-description-auto-complete/offer-description-auto-complete.component';
import {PrintModule} from "../print/print.module";
import { PrintDayButtonComponent } from './print-day-button/print-day-button.component';
import { AdminDayOffersCardComponent } from './admin-day-offers-card/admin-day-offers-card.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdministrationRoutingModule,
        PrintModule,
        CacheModule
    ],
    declarations: [AdminHomeComponent, OfferFormDialogComponent, AdminOfferItemComponent, OfferDescriptionAutoCompleteComponent, PrintDayButtonComponent, AdminDayOffersCardComponent],
    entryComponents: [OfferFormDialogComponent]
})
export class AdministrationModule {
}
