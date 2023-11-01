import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "../../shared/components/page404/page404.component";
import {MessagesComponent} from "./components/messages/messages.component";

const routes: Routes = [
  {
    path: '', component: MessagesComponent
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule {
}
