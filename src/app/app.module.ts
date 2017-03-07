import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ClientModule} from "./client/client.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SidenavComponent} from "./shared/components/sidenav/sidenav.component";



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        ClientModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
