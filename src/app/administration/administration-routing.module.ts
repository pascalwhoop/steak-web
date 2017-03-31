import {NgModule} from "@angular/core";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                {path: 'home', component: AdminHomeComponent},
            ]
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
