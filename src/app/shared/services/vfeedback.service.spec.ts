import {TestBed, inject, fakeAsync, tick} from "@angular/core/testing";
import {VFeedbackService} from "./vfeedback.service";
import {MdSnackBar} from "@angular/material";
import {Observable} from "rxjs";

describe('VFeedbackService', () => {


    let snackSpy = jasmine.createSpyObj('snackBar', ['open']);
    let service: VFeedbackService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                VFeedbackService,
                {provide: MdSnackBar, useValue: snackSpy}
            ]
        });

    });

    beforeEach(inject([VFeedbackService], (_service: VFeedbackService) => {
        service = _service;
    }));

    it('should inject the service', inject([VFeedbackService], (_service: VFeedbackService) => {
        expect(_service).toBeTruthy();
        expect(service).toBeTruthy();
    }));

    it('should let listeners subscribe', function () {
        expect(service._listeners.length).toBe(0);
        service.addListener({
            onLoading: () => {
            }, onLoadingComplete: () => {
            }
        });
        expect(service._listeners.length).toBe(1);
    });

    it('should remove listeners on removal', function () {
        expect(service._listeners.length).toBe(0);
        let listener = {
            onLoading: () => {
            }, onLoadingComplete: () => {
            }
        };
        service.addListener(listener);
        service.addListener(listener);
        service.addListener(listener);
        expect(service._listeners.length).toBe(3);
        service.removeListener(listener);
        expect(service._listeners.length).toBe(0);
    });

    it('should notify spinners of processing events and completion', fakeAsync(() => {

        let listenerSpy = jasmine.createSpyObj('listenerSpy', ['onLoading', 'onLoadingComplete']);
        service.addListener(listenerSpy);

        let obs = new Observable(subscribe => {
            subscribe.next('foobar');
            subscribe.complete();
        });
        service.spinUntilCompleted(obs);
        //wait one async cycle
        tick();
        expect(listenerSpy.onLoading).toHaveBeenCalledTimes(1);

        expect(listenerSpy.onLoadingComplete).toHaveBeenCalledTimes(1);

    }));

    it('should not notify spinners if observable has not been completed', fakeAsync(() => {
        let listenerSpy = jasmine.createSpyObj('listenerSpy', ['onLoading', 'onLoadingComplete']);
        service.addListener(listenerSpy);

        let obs = new Observable(subscribe => {
            subscribe.next('foobar');
        });
        service.spinUntilCompleted(obs);
        //wait one async cycle
        tick();
        expect(listenerSpy.onLoadingComplete).toHaveBeenCalledTimes(0);
    }));


    it('should call MdSnackBar on successful response from observable', done => {
        service.showMessageOnAnswer('hooray!', null, new Observable(sub => {
            sub.next('fake server response');
            sub.complete();
        }))
        //inside observable subscription of service
            .subscribe(next => {
                expect(snackSpy.open).toHaveBeenCalledWith('hooray!', undefined)
            }, null, done);
    });


    it('should call MdSnackBar  with error on failed response from observable', done => {
        service.showMessageOnAnswer('hooray!', 'fail :(', new Observable(sub => {
            sub.error();
            sub.complete();
        }))
        //inside observable subscription of service
            .subscribe(next => {
                expect(snackSpy.open).toHaveBeenCalledWith('fail :(');
            }, null, done);
    });


});