import {Component, OnInit, OnDestroy} from "@angular/core";
import {AnonymousSubscription} from "rxjs/Subscription";
import {XhrVisualFeedbackService} from "../../../xhr-visual-feedback/vfeedback.service";

@Component({
    selector: 'steak-working-spinner',
    template: `<md-progress-spinner mode="indeterminate" *ngIf="_visible"></md-progress-spinner>`,
    styleUrls: ['working-spinner.component.scss']
})
export class WorkingSpinnerComponent implements OnInit, OnDestroy {


    private _visible: boolean;
    private _subscription: AnonymousSubscription;
    private _connectionCounter = 0;

    constructor(public vfeedbackService: XhrVisualFeedbackService) {
    }

    ngOnInit() {
        this._subscription = this.vfeedbackService.subscribe(next => {
            console.log(next.type + ' next received in spinner');
            switch (next.type) {
                case 'open':
                    this._connectionCounter++;
                    break;
                case 'load':
                    this._connectionCounter--;
                    break;
                case 'abort':
                    this._connectionCounter--;
                    break;
                case 'error':
                    this._connectionCounter--;
                    break;
            }
            this._visible = this._connectionCounter > 0; //if larger 0, its visible! otherwise hide us

        });
    }

    ngOnDestroy(): void {
        if (!this._subscription) return;
        this._subscription.unsubscribe();
        this._subscription = null;
    }

}
