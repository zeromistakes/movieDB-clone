import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  movies2:any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=e318a7a565092a3d0c94c77304aec86f&query=fight')
      .subscribe((data:any) => {
        console.log(data);
        this.movies2 =  data.results
        console.log(this.movies2)
        return(this.movies2);
      });
  }

}
