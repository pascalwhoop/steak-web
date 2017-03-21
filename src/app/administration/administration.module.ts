import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {SharedModule} from "../shared/shared.module";
import {OfferFormDialogComponent} from "./offer-form-dialog/offer-form-dialog.component";
import { AdminOfferItemComponent } from './admin-offer-item/admin-offer-item.component';
import {CacheModule} from "../cache/cache.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdministrationRoutingModule,
        CacheModule
    ],
    declarations: [AdminHomeComponent, OfferFormDialogComponent, AdminOfferItemComponent],
    entryComponents: [OfferFormDialogComponent]
})
export class AdministrationModule {
}
