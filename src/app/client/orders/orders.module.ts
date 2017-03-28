import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersPageComponent} from "./orders-page/orders-page.component";
import {RouterModule} from "@angular/router";
import {LoggedInGuard} from "../../login/logged-in.guard";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: OrdersPageComponent}])
  ],
  declarations: [OrdersPageComponent]
})
export class OrdersModule { }
