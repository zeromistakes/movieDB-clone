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
  constructor(private http: HttpClient) {

  }

  getSearchData(query: string,page?:number) {
    this.searchQuery = query;
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&page=${page}&query=${this.searchQuery}`)
      .subscribe((data:any) => {
        this.resultData.next(data);
      });
  }

  getMovieData(id: number) {

    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e318a7a565092a3d0c94c77304aec86f&append_to_response=credits`)
      .subscribe((data:any) => {
        this.movieInfo.next(data);
      })
  }

}



