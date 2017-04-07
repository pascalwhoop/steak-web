import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BillingPageComponent} from "./billing-page/billing-page.component";
import {SharedModule} from "../../shared/shared.module";
import {TopThreeMealsCardComponent} from "./top-three-meals-card/top-three-meals-card.component";
import {TotalSumCardComponent} from "./total-sum-card/total-sum-card.component";
import {AverageSumPerEmployeeCardComponent} from "./average-sum-per-employee-card/average-sum-per-employee-card.component";
import {GenerateBillingPdfFormCardComponent} from "./generate-billing-pdf-form-card/generate-billing-pdf-form-card.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [BillingPageComponent, TopThreeMealsCardComponent, TotalSumCardComponent, AverageSumPerEmployeeCardComponent, GenerateBillingPdfFormCardComponent],
    exports: [
        BillingPageComponent
    ]
})
export class BillingModule {
}
