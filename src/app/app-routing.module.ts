import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoggedInGuard} from "./login/logged-in.guard";


export const routes: Routes = [
    {path: '', redirectTo: 'client/offers', pathMatch: 'full', canActivate: [LoggedInGuard]},
    {
        path: 'admin',
        loadChildren: 'app/administration/administration.module#AdministrationModule',
        canActivate: [LoggedInGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}