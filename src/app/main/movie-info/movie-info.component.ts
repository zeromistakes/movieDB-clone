import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movieInfo:any;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getMovieData();
  }

  getMovieData() {
    this.searchService.movieInfo.subscribe(data => this.movieInfo = data);
    console.log(this.movieInfo);
  }
}
