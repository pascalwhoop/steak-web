import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../services/page-title.service";
import {UserService} from "../../../login/user.service";

@Component({
    selector: 'steak-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(public titleService: PageTitleService, public userService: UserService) {

    }

    get title() {
        return this.titleService.title;
    }

    get username() {
        return this.userService.username;
    }

    ngOnInit() {
    }

}
