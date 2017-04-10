import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginPageComponent} from "./login-page.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {UserService} from "../user.service";
import {By} from "@angular/platform-browser";
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

    xit('should call enable the login Button after entering credentials', async(() => {

        fixture.whenStable()
            .then(() => {
                let loginButton = fixture.debugElement.query(By.css('form>button'));
                expect(loginButton.properties['disabled']).toBe(true);

                console.log(loginButton);

                //simulate user entering credentials
                let usernameInput = fixture.debugElement.query(By.css('#UsernameInput'));
                let passwordInput = fixture.debugElement.query(By.css('#PasswordInput'));
                usernameInput.nativeElement.value = 'testuser';
                passwordInput.nativeElement.value = 'testpass';

                fixture.detectChanges();

                expect(loginButton.properties['disabled']).toBe(false);
            })


    }));
});
