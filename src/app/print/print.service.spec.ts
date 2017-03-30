import {TestBed, inject} from "@angular/core/testing";
import {PrintService} from "./print.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('PrintService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PrintService],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    it('should ...', inject([PrintService], (service: PrintService) => {
        expect(service).toBeTruthy();
    }));

    it('should generate a new PDF listing a number of orders for each type of offer', () => {

    });
});
