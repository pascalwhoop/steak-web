import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Offer} from "../../shared/api/model/Offer";
import {Http} from "@angular/http";
import {OffersApi} from "../../shared/api/endpoints/OffersApi";
import {PageTitleService} from "../../shared/services/page-title.service";

@Component({
    selector: 'steak-offers-page',
    templateUrl: './offers-page.component.html',
    styleUrls: ['./offers-page.component.css']
})
export class OffersPageComponent implements OnInit {

    offers: Observable<Offer[]>;
    days: Date[];

    constructor(public title: PageTitleService, public offersApi: OffersApi) {}

    generateDays(){
        this.days = [];
        this.days.push(new Date()); //throw in today, remove at the end
        while(this.days.length < 15){
            let last = this.days[this.days.length-1];
            let day = last.getDay();
            let date = last.getDate();
            let next = new Date(last);
            if(day == 5){
                next.setDate(date + 3)
            }else{
                next.setDate(date+1);
            }
            this.days.push(next);
        }
        this.days = this.days.slice(1)

    }

    ngOnInit() {
        this.generateDays();
        this.title.title = "Offers";
        this.offers = this.offersApi.offerGet('pbr', null, new Date());
    }

    getWeekDayForNumber(num: number){
        let weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[num]
    }

}
