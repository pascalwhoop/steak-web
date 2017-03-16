import {Component, OnInit, OnDestroy} from "@angular/core";
import {LoadingEventListener} from "../../services/LoadingEventListener";
import {VFeedbackService} from "../../services/vfeedback.service";
import {_keyValueDiffersFactory} from "@angular/core/src/application_module";

@Component({
    selector: 'steak-working-spinner',
    templateUrl: 'working-spinner.component.html',
    styleUrls: ['working-spinner.component.scss']
})
export class WorkingSpinnerComponent extends LoadingEventListener implements OnInit, OnDestroy {


    private _visible: boolean;

    constructor(public vfeedbackService: VFeedbackService) {
        super();
    }


    onLoading() {
        console.log('showing wheel');
        this._visible = true;
    }

    onLoadingComplete() {
        console.log('hiding wheel');
        this._visible = false;
    }

    ngOnInit() {
        this.vfeedbackService.addListener(this);
    }

    ngOnDestroy(): void {
        this.vfeedbackService.removeListener(this);
    }


}
