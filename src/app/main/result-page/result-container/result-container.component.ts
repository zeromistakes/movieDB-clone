import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  movies:any;
  currentPage:number = 0;
  totalResults: number = 0;
  constructor(public searchService: SearchService,
              private router: Router,
  ) { }


  ngOnInit(): void {
    this.subscribeToResultData();
  }

  subscribeToResultData() {
    this.searchService.resultData.subscribe((data:any) => {
      this.movies = data;
      this.currentPage = data.page;
      this.totalResults = data.total_results;
    });
  }

  onMovieClick(id:number) {
    // this.searchService.getMovieData(id);
    this.router.navigateByUrl(`/movie-info/${id}`);
  }

  onPageClick(page:number) {
    this.currentPage = page;
    this.searchService.getSearchData(this.searchService.searchQuery, this.currentPage);
  }
}
