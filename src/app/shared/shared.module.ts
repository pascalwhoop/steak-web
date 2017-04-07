import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiModule} from "./api/api.module";
import {MaterialModule, MdIconRegistry} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import "hammerjs";
import {ObjectToArrayPipe} from "./pipes/object-to-array.pipe";
import {WorkingSpinnerComponent} from "./components/working-spinner/working-spinner.component";
import {BrowserXhr} from "@angular/http";
import {CustomBrowserXhr} from "../ajax-visual-feedback/custom-browser-xhr.service";
import {CovalentCoreModule, TdLoadingService, LoadingType} from "@covalent/core";
import {MainComponent} from "./components/main/main.component";
import {DomSanitizer} from "@angular/platform-browser";
import { NothingHereComponent } from './components/nothing-here/nothing-here.component';
import {OrdersHistoryTableComponent} from "./components/orders-history-table/orders-history-table.component";

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        CovalentCoreModule,
        RouterModule,
    ],
    declarations: [MainComponent, ObjectToArrayPipe, WorkingSpinnerComponent, NothingHereComponent, OrdersHistoryTableComponent],
    providers: [{provide: BrowserXhr, useExisting: CustomBrowserXhr}],
    exports: [
        CommonModule,
        CovalentCoreModule,
        ApiModule,
        MainComponent,
        FormsModule,
        MaterialModule,
        WorkingSpinnerComponent,
        OrdersHistoryTableComponent,
        NothingHereComponent,
        ObjectToArrayPipe,
        FlexLayoutModule,
    ]
})
export class SharedModule {

    constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, tdLoading: TdLoadingService) {
        iconRegistry.addSvgIcon('oc_logo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/oc_logo.svg'));
        iconRegistry.addSvgIcon('oc_brand', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/oc_brand.svg'));
        iconRegistry.addSvgIcon('breakfast', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/breakfast.svg'));
        iconRegistry.addSvgIcon('soup', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/soup.svg'));
        iconRegistry.addSvgIcon('salad', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salad.svg'));
        iconRegistry.addSvgIcon('meat', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/steak.svg'));
        iconRegistry.addSvgIcon('vegetarian', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vegetarian.svg'));

        //create a default spinner loading mask
        //tdLoading.create({name:'fullscreen', type: LoadingType.Circular});
    }
}
