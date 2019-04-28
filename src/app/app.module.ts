import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {TutorsComponent} from './tutors/tutors.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AddTutorComponent } from './add-tutor/add-tutor.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},{
  path: "dashboard",
  component: DashboardComponent
}, {
  path: "tutors",
  component: TutorsComponent
},{
  path: "add-tutor",
  component: AddTutorComponent
},{
  path:"students",
  component:StudentComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    TutorsComponent,
    DashboardComponent,
    AddTutorComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
