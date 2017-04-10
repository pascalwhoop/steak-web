import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OffersApi} from '../../shared/api/endpoints/OffersApi';
import {TdDialogService, TdLoadingService} from '@covalent/core';
import {DefaultOffersService} from '../default-offers-service/default-offers.service';
import {AjaxVisualFeedbackService} from '../../ajax-visual-feedback/ajax-visual-feedback.service';
import {Observable} from 'rxjs';
import {Offer} from '../../shared/model/Offer';

@Component({
    selector: 'steak-quick-defaults-create-button',
    templateUrl: './quick-defaults-create-button.component.html',
    styleUrls: ['./quick-defaults-create-button.component.scss'],
})
export class QuickDefaultsCreateButtonComponent implements OnInit {

    @Input()
    date: Date;
    @Output()
    offerChange: EventEmitter<Offer> = new EventEmitter();

    constructor(public offersApi: OffersApi, public simpleDialog: TdDialogService, public defaultOffersService: DefaultOffersService, public loading: TdLoadingService, public snack: AjaxVisualFeedbackService) {

    }

    ngOnInit() {
    }

    confirm(): Observable<any> {
        return this.simpleDialog.openConfirm({
            message: 'This will create standard offers for breakfast and salad',
            title: 'Confirm',
            cancelButton: 'Cancel',
            acceptButton: 'OK',
        }).afterClosed();
    }

    createDefaults() {
        //ask for confirm
        this.confirm().subscribe((confirm) => {
            if (confirm) {

                let defaultOffers = this.defaultOffersService.getDefaultOffers(this.date);
                this.loading.register();

                let obs = this.callApiFor(defaultOffers);
                this.handleResponse(obs);
            }
        });

    }

    private callApiFor(defaultOffers: Offer[]): Observable<Offer[]> {

        let obss = [];
        defaultOffers.forEach((offer) => {
            obss.push(this.offersApi.offerPost(offer));
        });
        return Observable.forkJoin(obss).share();
    }

    private handleResponse(obs: Observable<Offer[]>) {
        this.snack.showMessageOnAnswer('Offers created', 'Error on creation', obs);
        obs.subscribe((results: Offer[]) => {
                results.forEach((result) => this.offerChange.emit(result));
            },

            (error) => this.loading.resolve(),
            //complete
            () => this.loading.resolve());
    }
}
