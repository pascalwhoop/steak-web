import { NgModule } from '@angular/core';
import {SidenavComponent} from "../shared/components/sidenav/sidenav.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    RouterModule.forChild(
        [
          {
            path: '',
            component: SidenavComponent,
            children: [
              {path: '', redirectTo: 'home', pathMatch: 'full'},
              {path: 'home', component: AdminHomeComponent},

            ]
          }

        ]
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
