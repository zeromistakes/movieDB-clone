import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {environment} from "../environments/environment";
import { Genres } from "../interfaces/genres";
import {Options} from "@angular-slider/ngx-slider";
import { Genre } from "../interfaces/genre";
import {SearchService} from "./search.service";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  userScoreLower: number = 1;
  userScoreHigher: number = 10;
  options: Options = {
    floor: 1,
    ceil: 10
  };
  sortParam: string = 'popularity.asc';
  dateFromParam: string  = '';
  dateToParam: string  = '';
  genres:Genre[] = [];
  genresParam: string[] = [];

  constructor(private searchService: SearchService
              ) { }
  //todo environments +
  //todo change filter service +-
  //todo type for filter parameters
  //todo data types (genres+, searchData, movieInfo, filteredData+ etc.), delete Behaviours
  //todo router
  //todo change query string
  //todo reactive forms
  //todo interceptors
  //todo memoization angular

  //todo barrell export / reexport
  subscribeToGenres() {
    this.searchService.getGenres().subscribe((data: Genres) =>{
      this.genres = data.genres;
      console.log(this.genres)
    });
  }

  searchBtnHandler() {
    this.searchService.getFilteredData( this.sortParam, this.dateFromParam, this.dateToParam,this.genresParam.join(),this.userScoreLower,this.userScoreHigher);
  }
}
