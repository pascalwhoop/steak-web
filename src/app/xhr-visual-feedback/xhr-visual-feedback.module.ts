import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomBrowserXhr} from "./custom-browser-xhr.service";
import {XhrVisualFeedbackService} from "./vfeedback.service";
import {WorkingSpinnerComponent} from "../shared/components/working-spinner/working-spinner.component";

@NgModule({
  imports: [
    CommonModule

  ],
  declarations: [],
  providers: [CustomBrowserXhr, XhrVisualFeedbackService],
  exports: []

})
export class XhrVisualFeedbackModule { }
