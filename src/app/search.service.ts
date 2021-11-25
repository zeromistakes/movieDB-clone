import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  resultData = new BehaviorSubject({});
  constructor(private http: HttpClient) {
  }

  getSearchData(query: string) {
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&query=${query}`)
      .subscribe((data:any) => {
        console.log(data);
        this.resultData.next(data);
      });
  }
}


