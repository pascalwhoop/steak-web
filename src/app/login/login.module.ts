import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SharedModule} from "../shared/shared.module";
import {Routes, RouterModule} from "@angular/router";
import {UserService} from "./user.service";
import {LoggedInGuard} from "./logged-in.guard";
import { LogoutButtonComponent } from './logout-button/logout-button.component';


const ROUTES : Routes =[
    { path: 'login', component: LoginPageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [LoginPageComponent, LogoutButtonComponent],
    providers: [UserService, LoggedInGuard]
})
/**
 * Opitz wide Login Module that should be reusable for all other applications. Needs further extension of course.
 */
export class LoginModule {
    
}
