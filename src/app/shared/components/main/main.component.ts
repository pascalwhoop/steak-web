import {Component, OnInit} from "@angular/core";
import {PageTitleService} from "../../services/page-title.service";
import {UserService} from "../../../login/user.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MdIconRegistry} from "@angular/material";

@Component({
    selector: 'steak-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(public titleService: PageTitleService, public userService: UserService) {

    }

    getTitle() {
        return this.titleService.title;
    }

    getUsername() {
        return this.userService.username;
    }

    ngOnInit() {
    }

}
