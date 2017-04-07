import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BillingPageComponent} from "./billing-page/billing-page.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BillingPageComponent] ,
  exports: [
      BillingPageComponent
  ]
})
export class BillingModule { }
