import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PrintDayButtonComponent} from './print-day-button.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {OrdersApi} from '../../shared/api/endpoints/OrdersApi';
import {PrintService} from '../../print/print.service';
import {OrdersApiStub} from '../../../testing/orders-api-stub';

describe('PrintDayButtonComponent', () => {
    let component: PrintDayButtonComponent;
    let fixture: ComponentFixture<PrintDayButtonComponent>;
    let printerSpy = jasmine.createSpyObj('printService', ['printListOfOrdersForKitchen']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrintDayButtonComponent],
            providers: [
                {provide: OrdersApi, useClass: OrdersApiStub},
                {provide: PrintService, useValue: printerSpy},
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrintDayButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch all orders for the day set to the input and then call the PDF print service', () => {
        let date = new Date('2015-05-05');
        let ordersGetSpy = spyOn(component.ordersApi, 'ordersGET').and.callThrough();
        component.onClick(date);
        expect(ordersGetSpy).toHaveBeenCalled();
        expect(printerSpy.printListOfOrdersForKitchen).toHaveBeenCalled();
    });
});
