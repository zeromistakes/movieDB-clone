import {Component, Injectable, OnInit} from '@angular/core';
import { FilterService } from "../../../filter.service";
import { SearchService } from "../../../search.service";
import {FilteredMoviesResponse} from "../../../../interfaces/filteredMoviesResponse";
import {FilteredMovieResult} from "../../../../interfaces/filteredMovieResult";

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss']
})
export class TopRatedContainerComponent implements OnInit {

  filteredMovies: FilteredMovieResult[] = [];

  constructor(
              private searchService: SearchService,
              private filterService: FilterService
              ) { }

  ngOnInit(): void {
    this.subscribeToFilteredData();
    console.log(this.filteredMovies)
  }

  subscribeToFilteredData() {
    this.searchService.getFilteredData( this.filterService.sortParam, this.filterService.dateFromParam, this.filterService.dateToParam,this.filterService.genresParam.join(),this.filterService.userScoreLower,this.filterService.userScoreHigher).subscribe((data: FilteredMoviesResponse) =>{
      this.filteredMovies = data.results;
      console.log('filteredmovies:',this.filteredMovies)
    });
  }
}
