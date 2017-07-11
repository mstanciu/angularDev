import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AppComponent} from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component'
import { EventListComponent }  from './events/event-list/event-list.component';
import { FriendsComponent}  from './auth/friends/friends.component';
import { SettingsComponent} from './auth/settings/settings.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent, children: [
    {path:'listOfEvents', component: EventListComponent}
  ]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'friends' , component: FriendsComponent, children: [

  ]},
  {path: 'settings', component: SettingsComponent, children: [
    
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
