import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SchoolComponent } from './school/school.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';
import { Routes , RouterModule } from '@angular/router';

// http://localhost:60934/main      ---- Maincontent
// http://localhost:60934/school     ---- schoolcontent
// http://localhost:60934/schooldetails  ---- schooldetailscontent
// path : 'main'    maincomponent
// path : 'school'  schoolcomponent
// path : 'schooldetails' schooldetailcomponent

const AppRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'school-details', component: SchoolDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SchoolComponent,
    SchoolDetailsComponent,
  ],
  imports: [BrowserModule , RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
