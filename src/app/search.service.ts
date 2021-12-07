import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  resultData = new BehaviorSubject({});
  movieInfo = new BehaviorSubject({});

  public searchQuery = '';
  // currentPage = 1;
  // totalPages = 0;
  // totalResults = 0;
  constructor(private http: HttpClient) {

  }

  getSearchData(query: string,page:number = 1) {
    this.searchQuery = query;
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&page=${page}&query=${this.searchQuery}`)
      .subscribe((data:any) => {
        console.log(data);
        // this.totalPages = data.total_pages;
        // this.totalResults = data.total_results;
        this.resultData.next(data);
      });
  }

  getMovieData(id: number) {
    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e318a7a565092a3d0c94c77304aec86f&append_to_response=credits`)
      .subscribe((data:any) => {
        console.log(data)
        this.movieInfo.next(data);
      })
  }

  // changePage(page:any){
  //   this.currentPage = page;
  //   this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&page=${this.currentPage}&query=${this.searchQuery}`)
  //     .subscribe((data:any) => {
  //       console.log(data);
  //       this.resultData.next(data);
  //     });
  // }

//   getNextPage(pageValue:number): number {
//       return this.currentPage + pageValue;
//   }
//
//   getPrevPage(pageValue:number): number {
//     return this.currentPage - pageValue;
//   }
}



