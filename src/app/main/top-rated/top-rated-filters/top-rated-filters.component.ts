import { Component, OnInit } from '@angular/core';
import {FilterService} from "../../../filter.service";

@Component({
  selector: 'app-top-rated-filters',
  templateUrl: './top-rated-filters.component.html',
  styleUrls: ['./top-rated-filters.component.scss']
})
export class TopRatedFiltersComponent implements OnInit {
  sortParam = 'popularity.desc';
  dateFromParam = '';
  dateToParam = '';
  genresObj:any;
  genresParam: string[] = [];
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    console.log(this.sortParam)
    this.filterService.getFilteredData( this.sortParam, this.dateFromParam, this.dateToParam);
    this.subscribeToGenres();
  }

  subscribeToGenres() {
    this.filterService.getGenres().subscribe((data:any) =>{
      this.genresObj = data
      console.log(this.genresObj)
    });

  }

  onSubmit(e:any) {
    this.sortParam = e.target.sort.value;
    this.dateFromParam = e.target.dateFrom.value;
    this.dateToParam = e.target.dateTo.value;
    this.filterService.getFilteredData( this.sortParam, this.dateFromParam, this.dateToParam,this.genresParam.join())
    console.log(this.sortParam);
    console.log(this.dateFromParam);
    console.log(this.dateToParam);
  }

  onGenreClick(e:any) {
    if(e.target.className === 'genre-item genre-item-active') {
      e.target.className = 'genre-item';
      this.genresParam.splice(this.genresParam.indexOf(e.target.id),1);
    } else {
      e.target.className = 'genre-item genre-item-active';
      this.genresParam.push(e.target.id);
    }
    console.log(this.genresParam)
    console.log(e.target.id)
  }
}
