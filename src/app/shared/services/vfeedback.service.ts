import {Injectable} from "@angular/core";
import {MdSnackBar, MdSnackBarRef, SimpleSnackBar} from "@angular/material";
import {Observable} from "rxjs";
import {LoadingEventListener} from "./LoadingEventListener";

@Injectable()
export class VFeedbackService {

    _listeners: LoadingEventListener[] = [];

    constructor(private snackBar: MdSnackBar) {

    }

    public addListener(listener: any) {
        this._listeners.push(listener);
    }

    public removeListener(listener: any) {
        this._listeners = this._listeners.filter(item => item !== listener)
    }

    /**
     *
     * @param forthis: The observable to watch and spin for
     */
    public spinUntilCompleted(forthis: Observable<any>): void {
        //start up all listeners
        this.triggerAllListeners();
        //on end of observable call complete for all listeners
        forthis.subscribe(null, null, () => {
            this.completeAllListeners()
        })


    }

    /**
     *
     * @param successMessage
     * @param failMessage
     * @param observableRequest
     * @param actionText
     * @returns {Observable|"../../../Observable".Observable|"../../Observable".Observable}
     */
    public showMessageOnAnswer(successMessage: string, failMessage: string, observableRequest: Observable<any>, actionText?: string): Observable<MdSnackBarRef<SimpleSnackBar>> {
        return new Observable(sub => {
            observableRequest
                .subscribe(
                    null,
                    err => {
                        let snack = this.snackBar.open(failMessage);
                        sub.next(snack);
                        sub.complete()
                    },
                    () => {
                        sub.next(this.snackBar.open(successMessage, actionText));
                        sub.complete()
                    })
        })
    }

    private triggerAllListeners() {
        this._listeners.forEach((listener) => {
            if (listener) listener.onLoading();
        });
    }

    private completeAllListeners() {
        this._listeners.forEach(listener => {
            if(listener)listener.onLoadingComplete();
        });
    }

}
