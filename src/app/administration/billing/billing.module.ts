import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BillingPageComponent} from "./billing-page/billing-page.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [BillingPageComponent],
    exports: [
        BillingPageComponent
    ]
})
export class BillingModule {
}
