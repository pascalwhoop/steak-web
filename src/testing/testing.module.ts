import {NgModule} from "@angular/core";
import {OfferItemStubComponent} from "./offer-item-stub";
import {RouterOutletStubComponent} from "./router-outlet-stub";
import {OffersApiStub} from "./offers-api-stub";
import {OrdersApiStub} from "./orders-api-stub";
import {UsersApiStub} from "./users-api-stub";
import {AppComponent} from "../app/app.component";


@NgModule({
    declarations: [
        OfferItemStubComponent,
        RouterOutletStubComponent


    ],
    imports: [],
    providers: [OffersApiStub, OrdersApiStub, UsersApiStub],
    bootstrap: [AppComponent]
})
export class AppModule {
}
