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
import {CovalentCoreModule} from "@covalent/core";
import {MainComponent} from "./components/main/main.component";
import {DomSanitizer} from "@angular/platform-browser";

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
    declarations: [MainComponent, ObjectToArrayPipe, WorkingSpinnerComponent],
    providers: [{provide: BrowserXhr, useExisting: CustomBrowserXhr}],
    exports: [
        CommonModule,
        CovalentCoreModule,
        ApiModule,
        MainComponent,
        FormsModule,
        MaterialModule,
        WorkingSpinnerComponent,
        ObjectToArrayPipe,
        FlexLayoutModule,
    ]
})
export class SharedModule {

    constructor(public iconRegistry: MdIconRegistry, public sanitizer: DomSanitizer) {
        this.iconRegistry.addSvgIcon('oc_logo', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/oc_logo.svg'));
        this.iconRegistry.addSvgIcon('oc_brand', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/oc_brand.svg'));
        this.iconRegistry.addSvgIcon('breakfast', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/breakfast.svg'));
        this.iconRegistry.addSvgIcon('soup', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/soup.svg'));
        this.iconRegistry.addSvgIcon('salad', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/salad.svg'));
        this.iconRegistry.addSvgIcon('meat', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/steak.svg'));
        this.iconRegistry.addSvgIcon('vegetarian', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vegetarian.svg'));
    }
}
