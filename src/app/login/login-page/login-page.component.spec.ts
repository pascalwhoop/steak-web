import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginPageComponent} from "./login-page.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";


describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    let userServiceSpy = jasmine.createSpyObj('userService', ['isLoggedIn']);
    let routerSpy = jasmine.createSpyObj('router', ['navigateByUrl']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            providers: [
                {provide: UserService, useValue: userServiceSpy},
                {provide: Router, useValue: routerSpy}
            ],
            declarations: [LoginPageComponent],
            schemas: [NO_ERRORS_SCHEMA]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
