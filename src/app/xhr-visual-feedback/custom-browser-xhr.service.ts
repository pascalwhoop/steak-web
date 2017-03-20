import {Injectable, SkipSelf, Optional} from "@angular/core";
import {BrowserXhr} from "@angular/http";
import {Observable, Subscriber} from "rxjs";
import {XhrEvent} from "./vfeedback.service";
import {CoreModule} from "../core/core.module";

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {

    private _observable: Observable<XhrEvent>;
    private _subscriber: Subscriber<XhrEvent>;

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super();
        if (parentModule) { throw new Error('CustomBrowserXhr is already loaded. Import it in the AppModule only');}

        this._observable = Observable.create(subscriber => {
            this._subscriber = subscriber;
        }).share();
    }


    get observable(): Observable<XhrEvent> {
        return this._observable;
    }

    build(): any {
        let xhr = super.build();
        let oldop = xhr.onprogress;
        if (!this._subscriber) return xhr;

        //at the beginning, we create an event that notifies an opening of a connection
        this._subscriber.next({type: 'open', event: {}});

        xhr.onprogress = (event) => {
            if (oldop) oldop(event);
            this._subscriber.next({type: 'progress', event: event});
        };
        let oldload = xhr.onload;
        xhr.onload = (event) => {
            if (oldload) oldload(event);
            this._subscriber.next({type: 'load', event: event});
        };

        let olderror = xhr.onerror;
        xhr.onerror = (event) => {
            if (olderror) olderror(event);
            this._subscriber.next({type: 'error', event: event});
        };

        let oldabort = xhr.onabort;
        xhr.onabort = (event) => {
            if (oldabort) oldabort(event);
            this._subscriber.next({type: 'abort', event: event});
        };

        return xhr;
    }

}
