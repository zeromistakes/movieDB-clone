import { Component, OnInit } from '@angular/core';
import {FilterService} from "../../../filter.service";
import { SearchService } from "../../../search.service";


@Component({
  selector: 'app-top-rated-filters',
  templateUrl: './top-rated-filters.component.html',
  styleUrls: ['./top-rated-filters.component.scss']
})
export class TopRatedFiltersComponent implements OnInit {
  // userScoreLower: number = 1;
  // userScoreHigher: number = 10;
  // options: Options = {
  //   floor: 1,
  //   ceil: 10
  // };
  // sortParam: string = 'popularity.desc';
  // dateFromParam: string  = '';
  // dateToParam: string  = '';
  // genres:Genre[] = [];
  // genresParam: string[] = [];
  constructor(public filterService: FilterService,
              private searchService: SearchService,
              ) { }

  ngOnInit(): void {
    this.filterService.subscribeToGenres();
    // this.searchService.getFilteredData( this.filterService.sortParam, this.filterService.dateFromParam, this.filterService.dateToParam);
  }


  onSubmit(e:any) {
    this.filterService.sortParam = e.target.sort.value;
    this.filterService.dateFromParam = e.target.dateFrom.value;
    this.filterService.dateToParam = e.target.dateTo.value;
    this.filterService.searchBtnHandler();
    console.log(this.filterService.sortParam)
    console.log(this.filterService.userScoreLower)
    console.log(this.filterService.userScoreHigher)
    //todo
  }

  onGenreClick(e:any) {
    if(e.target.className === 'genre-item genre-item-active') {
      e.target.className = 'genre-item';
      this.filterService.genresParam.splice(this.filterService.genresParam.indexOf(e.target.id),1);
    } else {
      e.target.className = 'genre-item genre-item-active';
      this.filterService.genresParam.push(e.target.id);
    }
    console.log(this.filterService.genresParam)
    console.log(e.target.id)
  }
}
