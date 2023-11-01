import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./shared/components/home/home.component";
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {Page404Component} from "./shared/components/page404/page404.component";

const routes: Routes = [
  {
    path: 'home',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    component: HomeComponent
  },
  {
    path: 'auth',
    ...canActivate(() => redirectLoggedInTo(['/home'])),
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'messages',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'customers',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'appointments',
    ...canActivate(() => redirectUnauthorizedTo(['/auth'])),
    loadChildren: () => import('./modules/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
