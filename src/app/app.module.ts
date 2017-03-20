import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ClientModule} from "./client/client.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {LoginModule} from "./login/login.module";
import {XhrVisualFeedbackModule} from "./xhr-visual-feedback/xhr-visual-feedback.module";
import {BrowserXhr} from "@angular/http";
import {CustomBrowserXhr} from "./xhr-visual-feedback/custom-browser-xhr.service";



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        ClientModule,
        LoginModule,
        XhrVisualFeedbackModule
    ],
    providers: [{provide: BrowserXhr, useExisting: CustomBrowserXhr}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
