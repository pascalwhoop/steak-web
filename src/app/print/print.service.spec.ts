import {inject, TestBed} from '@angular/core/testing';
import {PrintService} from './print.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MdSnackBar} from '@angular/material';

describe('PrintService', () => {
    let snackSpy = jasmine.createSpyObj('snackBar', ['open']);
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PrintService,
                {provide: MdSnackBar, useValue: snackSpy},
            ],
            schemas: [NO_ERRORS_SCHEMA],
        });
    });

    it('should ...', inject([PrintService], (service: PrintService) => {
        expect(service).toBeTruthy();
    }));

    it('should generate a new PDF listing a number of orders for each type of offer', () => {

    });
});
