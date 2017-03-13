import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {SharedModule} from "../shared/shared.module";
import { OfferFormComponent } from './offer-form/offer-form.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AdministrationRoutingModule
    ],
    declarations: [AdminHomeComponent, OfferFormComponent]
})
export class AdministrationModule {
}
