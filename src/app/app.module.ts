import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { CardPlanteComponent } from './components/card-plante/card-plante.component';
import { IconComponent } from './components/icon/icon.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageDetailsComponent,
    PageNotFoundComponent,
    PageAccueilComponent,
    FilterSideBarComponent,
    CardPlanteComponent,
    IconComponent,
    RatingStarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
