import {NgModule} from "@angular/core";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RouterModule} from "@angular/router";
import {MainComponent} from "../shared/components/main/main.component";
import {BillingPageComponent} from "./billing/billing-page/billing-page.component";


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
                        {path: 'billing', component: BillingPageComponent},
                    ]
                },
                { path: '**', redirectTo: 'home'}

            ]
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
