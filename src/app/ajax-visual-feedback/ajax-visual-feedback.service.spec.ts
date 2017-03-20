import {TestBed, inject, fakeAsync, tick} from "@angular/core/testing";
import {AjaxVisualFeedbackService, XhrEvent} from "./ajax-visual-feedback.service";
import {MdSnackBar} from "@angular/material";
import {Observable, Subscriber} from "rxjs";
import {CustomBrowserXhr} from "./custom-browser-xhr.service";

describe('AjaxVisualFeedbackService', () => {

    //mocking dependencies
    let snackSpy = jasmine.createSpyObj('snackBar', ['open']);
    let observable = Observable.create(_subscriber => {
        subscriber = _subscriber;
    });
    let customBrowserSpy = {observable: observable};
    let subscriber: Subscriber<XhrEvent>;


    let service: AjaxVisualFeedbackService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AjaxVisualFeedbackService,
                {provide: MdSnackBar, useValue: snackSpy},
                {provide: CustomBrowserXhr, useValue: customBrowserSpy}
            ]
        });

    });

    beforeEach(inject([AjaxVisualFeedbackService], (_service: AjaxVisualFeedbackService) => {
        service = _service;
        spyOn(observable, 'subscribe').and.callThrough();
    }));

    it('should inject the service', inject([AjaxVisualFeedbackService], (_service: AjaxVisualFeedbackService) => {
        expect(_service).toBeTruthy();
        expect(service).toBeTruthy();
    }));

    it('should let listeners subscribe', fakeAsync(() => {
        let result = {type: 'nothing', event: {}};
        service.subscribe(next => result = next);
        subscriber.next({type: 'open', event: {}});
        tick();
        expect(result.type).toEqual('open');
        service.subscribe(null, error =>result = error);
        subscriber.error({type: 'error', event:{}});
        tick();
        expect(result.type).toEqual('error');

    }));


    // it('should notify spinners of processing events and completion', fakeAsync(() => {
    //
    //     let listenerSpy = jasmine.createSpyObj('listenerSpy', ['onLoading', 'onLoadingComplete']);
    //     service.addListener(listenerSpy);
    //
    //     let obs = new Observable(subscribe => {
    //         subscribe.next('foobar');
    //         subscribe.complete();
    //     });
    //     service.spinUntilCompleted(obs);
    //     //wait one async cycle
    //     tick();
    //     expect(listenerSpy.onLoading).toHaveBeenCalledTimes(1);
    //
    //     expect(listenerSpy.onLoadingComplete).toHaveBeenCalledTimes(1);
    //
    // }));

    // it('should not notify spinners if observable has not been completed', fakeAsync(() => {
    //     let listenerSpy = jasmine.createSpyObj('listenerSpy', ['onLoading', 'onLoadingComplete']);
    //     service.addListener(listenerSpy);
    //
    //     let obs = new Observable(subscribe => {
    //         subscribe.next('foobar');
    //     });
    //     service.spinUntilCompleted(obs);
    //     //wait one async cycle
    //     tick();
    //     expect(listenerSpy.onLoadingComplete).toHaveBeenCalledTimes(0);
    // }));


    it('should call MdSnackBar on successful response from observable', done => {
        service.showMessageOnAnswer('hooray!', null, new Observable(sub => {
            sub.next('fake server response');
            sub.complete();
        }))
        //inside observable subscription of service
            .subscribe(next => {
                expect(snackSpy.open).toHaveBeenCalledWith('hooray!', undefined, {duration: 1500})
            }, null, done);
    });


    it('should call MdSnackBar  with error on failed response from observable', done => {
        service.showMessageOnAnswer('hooray!', 'fail :(', new Observable(sub => {
            sub.error();
            sub.complete();
        }))
        //inside observable subscription of service
            .subscribe(next => {
                expect(snackSpy.open).toHaveBeenCalledWith('fail :(', undefined, {duration: 1500});
            }, null, done);
    });


});
