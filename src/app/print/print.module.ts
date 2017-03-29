import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrintService} from "./print.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PrintService],
  declarations: [],
  exports: []
})
export class PrintModule { }
