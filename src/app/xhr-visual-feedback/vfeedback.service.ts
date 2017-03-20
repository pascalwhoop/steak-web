import {Injectable} from "@angular/core";
import {MdSnackBar, MdSnackBarRef, SimpleSnackBar} from "@angular/material";
import {Observable, Subscription} from "rxjs";
import {CustomBrowserXhr} from "./custom-browser-xhr.service";
import {Subscribable} from "rxjs/Observable";
import {AnonymousSubscription} from "rxjs/Subscription";

@Injectable()
export class XhrVisualFeedbackService implements Subscribable<XhrEvent>{



    constructor(private snackBar: MdSnackBar, private browserXhr: CustomBrowserXhr) {
    }

    /**
     * Subscribe to XhrEvents triggered by http and perform action based on them
     * @param next
     * @param error
     * @param complete
     * @returns {Subscription}
     */
    subscribe(next?: (value: XhrEvent) => void, error?: (error: any) => void, complete?: () => void): AnonymousSubscription {
        return this.browserXhr.observable.subscribe(next,error,complete);
    }

    /**
     *
     * @param successMessage
     * @param failMessage
     * @param observableRequest
     * @param actionText
     */
    public showMessageOnAnswer(successMessage: string, failMessage: string, observableRequest: Observable<any>, actionText?: string): Observable<MdSnackBarRef<SimpleSnackBar>> {
        let obs = new Observable(sub => {
            observableRequest
                .subscribe(
                    null,
                    err => {
                        let snack = this.snackBar.open(failMessage, null, {duration: 1500});
                        sub.next(snack);
                        sub.complete()
                    },
                    () => {
                        sub.next(this.snackBar.open(successMessage, actionText, {duration: 1500}));
                        sub.complete()
                    })
        }).publish();
        obs.connect();
        return obs;
    }

}

export interface XhrEvent{
    event: any;
    type: any;
}
