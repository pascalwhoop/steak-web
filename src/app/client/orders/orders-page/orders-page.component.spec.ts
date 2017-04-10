import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrdersPageComponent} from './orders-page.component';
import {PageTitleService} from '../../../shared/services/page-title.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {OrdersApiStub} from '../../../../testing/orders-api-stub';
import {OrdersApi} from '../../../shared/api/endpoints/OrdersApi';
import {UserService} from '../../../login/user.service';
import Spy = jasmine.Spy;

describe('OrdersPageComponent', () => {
    let component: OrdersPageComponent;
    let fixture: ComponentFixture<OrdersPageComponent>;
    let titleService: PageTitleService;
    let ordersSpy: Spy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrdersPageComponent],
            providers: [
                PageTitleService,
                {provide: OrdersApi, useClass: OrdersApiStub},
                {provide: UserService, useValue: {username: 'xxx'}},
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrdersPageComponent);
        titleService = fixture.debugElement.injector.get(PageTitleService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set its page name to the pageTitleService', () => {
        expect(titleService.title).toBe('Orders');
    });

});
