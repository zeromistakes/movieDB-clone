import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search.service';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  movies:any
  currentPage: number = 1;
  totalResults: number = 0;
  constructor(public searchService: SearchService,
              private router: Router,
              private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.subscribeToResultData();
  }

  subscribeToResultData() {
    this.searchService.resultData.subscribe((data:any) => {
      this.movies = data
      this.totalResults = data.total_results;
    });
    console.log(this.movies)
  }

  onMovieClick(id:number) {
    this.searchService.getMovieData(id);
    this.router.navigateByUrl('/movie-info');
  }

  // changePage(page:any){
  //   console.log(page)
  //   this.currentPage = page;
  //   this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&page=${this.currentPage}&query=${this.searchService.searchQuery}`)
  //     .subscribe((data:any) => {
  //       console.log(data);
  //       this.movies.next(data);
  //     });
  // }

  onPageClick(page:number) {
    this.currentPage = page;
    this.searchService.getSearchData(this.searchService.searchQuery, page);
  }
}
