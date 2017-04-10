import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdminOfferItemComponent} from './admin-offer-item.component';
import {MdDialog} from '@angular/material';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AdminOfferItemComponent', () => {
    let component: AdminOfferItemComponent;
    let fixture: ComponentFixture<AdminOfferItemComponent>;
    let dialogSpy = jasmine.createSpyObj('mdDialog', ['open']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOfferItemComponent],
            providers: [
                {provide: MdDialog, useValue: dialogSpy},
            ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminOfferItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
