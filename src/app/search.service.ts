import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from "../environments/environment";
import {FilteredMoviesResponse} from "../interfaces/filteredMoviesResponse";
import {Genres} from "../interfaces/genres";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  resultData = new BehaviorSubject({});
  movieInfo = new BehaviorSubject({});

  public searchQuery = '';
  constructor(private http: HttpClient) {

  }

  getSearchData(query: string,page?:number) {
    this.searchQuery = query;
    this.http.get(`${environment.apiUrl}search/movie?${environment.apiKey}&page=${page}&query=${this.searchQuery}`)
      .subscribe((data:any) => {
        this.resultData.next(data);
      });
  }

  getFilteredData(sortParam?:string, dateFromParam?:string, dateToParam?:string,genresParam?:string, userScoreLower?: number, userScoreHigher?: number ) {
    return  this.http.get<FilteredMoviesResponse>(`${environment.apiUrl}discover/movie?${environment.apiKey}&sort_by=${sortParam}&primary_release_date.gte=${dateFromParam}&primary_release_date.lte=${dateToParam}&vote_average.gte=${userScoreLower}&vote_average.lte=${userScoreHigher}&with_genres=${genresParam}`);
  }

  getGenres() {
    return  this.http.get<Genres>(`${environment.apiUrl}genre/movie/list?${environment.apiKey}`);
  }


//todo

//  getMovieData(id: number) {
//
//     this.http.get(`${environment.apiUrl}movie/${id}?${environment.apiKey}&append_to_response=credits`)
//       .subscribe((data:any) => {
//         this.movieInfo.next(data);
//       })
//   }
//
}



