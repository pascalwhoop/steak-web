import {Component, EventEmitter, Output} from '@angular/core';
import 'rxjs/add/operator/first';
import {PageTitleService} from "../../services/page-title.service";

@Component({
  selector: 'steak-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent {
  constructor(private _componentPageTitle: PageTitleService) { }

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._componentPageTitle.title;
  }
}
