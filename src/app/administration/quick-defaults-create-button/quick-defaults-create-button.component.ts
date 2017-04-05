import {Component, OnInit, Input} from "@angular/core";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {TdDialogService} from "@covalent/core";
import {DefaultOffersService} from "../default-offers-service/default-offers.service";

@Component({
    selector: 'steak-quick-defaults-create-button',
    templateUrl: './quick-defaults-create-button.component.html',
    styleUrls: ['./quick-defaults-create-button.component.scss']
})
export class QuickDefaultsCreateButtonComponent implements OnInit {

    @Input()
    date: Date;

    constructor(public offersApi: OffersApi, public simpleDialog: TdDialogService, public defaultOffersService: DefaultOffersService) {

    }

    ngOnInit() {
    }

    confirm() {
        this.simpleDialog.openConfirm({
            message: "This will create standard offers for breakfast and salad",
            title: "Confirm",
            cancelButton: "Cancel",
            acceptButton: "OK"
        }).afterClosed().subscribe(accept => {
            if (accept) {
                this.createDefaults();
            }
        })
    }

    createDefaults() {
        let offers = this.defaultOffersService.getDefaultOffers(this.date);
        
    }

}
