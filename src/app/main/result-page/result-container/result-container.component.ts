import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  movies:any
  constructor(private searchService: SearchService,private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.searchService.resultData.subscribe(data => this.movies = data)
    console.log(this.movies)
  }

  onMovieClick(id:number) {
    this.searchService.getMovieData(id);
    this.router.navigateByUrl('/movie-info');
  }
}
