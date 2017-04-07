import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoggedInGuard} from "./login/logged-in.guard";


export const routes: Routes = [
    {path: '', redirectTo: 'client/offers', pathMatch: 'full', canActivate: [LoggedInGuard]},
    {
        path: 'admin',
        loadChildren: 'app/administration/administration.module#AdministrationModule',
        canActivate: [LoggedInGuard]
    },
    { path: '**', redirectTo: 'client/offers'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}