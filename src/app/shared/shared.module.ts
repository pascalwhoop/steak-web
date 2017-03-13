import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiModule} from "./api/api.module";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {PageHeaderComponent} from "./components/page-header/page-header.component";
import { PageContentComponent } from './components/page-content/page-content.component';
import {PageTitleService} from "./services/page-title.service";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';

@NgModule({
    imports: [
        CommonModule,
        ApiModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [PageHeaderComponent, PageContentComponent, SidenavComponent, ObjectToArrayPipe],
    exports : [
        CommonModule,
        ApiModule,
        FormsModule,
        MaterialModule,
        PageHeaderComponent,
        PageContentComponent,
        SidenavComponent,
        ObjectToArrayPipe,
        FlexLayoutModule
    ],
    providers: [PageTitleService]
})
export class SharedModule {
}
