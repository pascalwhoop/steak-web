import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {OffersApi} from './endpoints/OffersApi';
import {OrdersApi} from './endpoints/OrdersApi';
import {UsersApi} from './endpoints/UsersApi';

@NgModule({
    imports: [HttpModule],
    providers: [
        OffersApi,
        OrdersApi,
        UsersApi,

    ],
})
export class ApiModule {
}
