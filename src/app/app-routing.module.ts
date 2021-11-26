import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./main/home-page/home-page.component";
import {ResultPageComponent} from "./main/result-page/result-page.component";
import {MovieInfoComponent} from "./main/movie-info/movie-info.component";

const routes: Routes = [
  { path: 'main', component: HomePageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'search-results', component: ResultPageComponent },
  { path: 'movie-info', component: MovieInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
