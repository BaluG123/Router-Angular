import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    PrivacyComponent,
    SportsComponent,
    TechnologyComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
