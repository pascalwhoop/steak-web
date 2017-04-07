import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ClientModule} from "./client/client.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";
import {BrowserXhr} from "@angular/http";
import {AjaxVisualFeedbackModule} from "./ajax-visual-feedback/ajax-visual-feedback.module";
import {CustomBrowserXhr} from "./ajax-visual-feedback/custom-browser-xhr.service";
import {CoreModule} from "./core/core.module";
import {PageTitleService} from "./shared/services/page-title.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        AppRoutingModule,
        ClientModule,
        LoginModule,
        AjaxVisualFeedbackModule
    ],
    providers: [{provide: BrowserXhr, useExisting: CustomBrowserXhr}, PageTitleService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
