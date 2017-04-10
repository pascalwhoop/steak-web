import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OfferCacheService} from "./offer-cache.service";

@NgModule({
  providers: [OfferCacheService],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CacheModule { }
