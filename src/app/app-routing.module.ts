import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


export const routes: Routes = [
    {path: '', redirectTo: 'client/offers', pathMatch: 'full'},
    {path: 'admin', loadChildren: 'app/administration/administration.module#AdministrationModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}