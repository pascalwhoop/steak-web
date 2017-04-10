import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomBrowserXhr} from "./custom-browser-xhr.service";
import {AjaxVisualFeedbackService} from "./ajax-visual-feedback.service";

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [],
  providers: [CustomBrowserXhr, AjaxVisualFeedbackService],
  exports: []

})
export class AjaxVisualFeedbackModule { }
