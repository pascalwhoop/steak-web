import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiModule} from "./api/api.module";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PageHeaderComponent} from "./components/page-header/page-header.component";
import {PageContentComponent} from "./components/page-content/page-content.component";
import {PageTitleService} from "./services/page-title.service";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import "hammerjs";
import {ObjectToArrayPipe} from "./pipes/object-to-array.pipe";
import {WorkingSpinnerComponent} from "./components/working-spinner/working-spinner.component";
import {BrowserXhr} from "@angular/http";
import {CustomBrowserXhr} from "../ajax-visual-feedback/custom-browser-xhr.service";

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
    ],
    declarations: [PageHeaderComponent, PageContentComponent, SidenavComponent, ObjectToArrayPipe, WorkingSpinnerComponent],
    providers: [PageTitleService, {provide: BrowserXhr, useExisting: CustomBrowserXhr}],
    exports: [
        CommonModule,
        ApiModule,
        FormsModule,
        MaterialModule,
        PageHeaderComponent,
        PageContentComponent,
        WorkingSpinnerComponent,
        SidenavComponent,
        ObjectToArrayPipe,
        FlexLayoutModule,
    ]
})
export class SharedModule {
}
