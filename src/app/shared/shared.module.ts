import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiModule} from "./api/api.module";
import {MaterialModule} from "@angular/material";
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
}
