import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {CustomBrowserXhr} from './custom-browser-xhr.service';
import {BrowserXhr, Http, HttpModule} from '@angular/http';
//import {beforeEachProviders} from '@angular/core/testing'

describe('CustomBrowserXhrService', () => {

    let service: CustomBrowserXhr;
    let http: Http;

    beforeEach(() => {
        TestBed.configureTestingModule({

            providers: [
                CustomBrowserXhr,
                {provide: BrowserXhr, useClass: CustomBrowserXhr},

            ],
            imports: [HttpModule],
        });
    });

    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         imports: [HttpModule]
    //     });
    // });

    beforeEach(inject([CustomBrowserXhr, Http], (_service: CustomBrowserXhr, _http: Http) => {
        service = _service;
        http = _http;
    }));

    it('should ...', inject([CustomBrowserXhr], (service: CustomBrowserXhr) => {
        expect(service).toBeTruthy();
    }));

    //TODO how to get HttpModule to be using our CustomBrowserXhr instead of the BrowserXhr
    xit('should notify observers on http call', fakeAsync(() => {
        let buildSpy = spyOn(service, 'build').and.callThrough();
        http.get('https://foobar.com');
        tick();
        expect(buildSpy).toHaveBeenCalled();
    }));
});
