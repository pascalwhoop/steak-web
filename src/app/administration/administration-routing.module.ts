import {NgModule} from "@angular/core";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RouterModule} from "@angular/router";
import {MainComponent} from "../shared/components/main/main.component";


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    component: MainComponent,
                    children: [
                        {path: '', redirectTo: 'home', pathMatch: 'full'},
                        {path: 'home', component: AdminHomeComponent},
                    ]
                }

            ]
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
