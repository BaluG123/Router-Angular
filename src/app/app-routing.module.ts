import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'aboutus',
    component:AboutComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'sports',
    component:SportsComponent
  },
  {
    path:'entertainment',
    component:EntertainmentComponent
  },
  {
    path:'technology',
    component:TechnologyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
