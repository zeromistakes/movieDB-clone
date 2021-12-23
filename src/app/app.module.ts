import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { ResultPageComponent } from './main/result-page/result-page.component';
import { SearchComponent } from './main/home-page/search/search.component';
import { SideCategoriesComponent } from './main/result-page/side-categories/side-categories.component';
import { ResultContainerComponent } from './main/result-page/result-container/result-container.component';
import { ResultItemComponent } from './main/result-page/result-item/result-item.component';
import { PaginationComponent } from './main/result-page/pagination/pagination.component';
import {FormsModule} from "@angular/forms";
import { MovieInfoComponent } from './main/movie-info/movie-info.component';
import { TransformTimePipe } from './pipes/transform-time.pipe';
import {CommonModule} from "@angular/common";
import { TopRatedComponent } from './main/top-rated/top-rated.component';
import { TopRatedFiltersComponent } from './main/top-rated/top-rated-filters/top-rated-filters.component';
import { TopRatedItemComponent } from './main/top-rated/top-rated-item/top-rated-item.component';
import { TopRatedContainerComponent } from './main/top-rated/top-rated-container/top-rated-container.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ResultPageComponent,
    SearchComponent,
    SideCategoriesComponent,
    ResultContainerComponent,
    ResultItemComponent,
    PaginationComponent,
    MovieInfoComponent,
    TransformTimePipe,
    TopRatedComponent,
    TopRatedFiltersComponent,
    TopRatedItemComponent,
    TopRatedContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
