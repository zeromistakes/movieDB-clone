import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filteredData = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getFilteredData(sortParam:string, dateFromParam?:string, dateToParam?:string,genresParam?:string, userScoreLower?: number, userScoreHigher?: number ) {
    this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=e318a7a565092a3d0c94c77304aec86f&sort_by=${sortParam}&primary_release_date.gte=${dateFromParam}&primary_release_date.lte=${dateToParam}&vote_average.gte=${userScoreLower}&vote_average.lte=${userScoreHigher}&with_genres=${genresParam}`)
      .subscribe((data:any) => {
        this.filteredData.next(data);
        console.log(this.filteredData);
      })
  }

  getGenres() {
   return  this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=e318a7a565092a3d0c94c77304aec86f`);
  }
}
