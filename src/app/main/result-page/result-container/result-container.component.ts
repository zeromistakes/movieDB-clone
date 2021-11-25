import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../search.service';
@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  movies:any
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.resultData.subscribe(data => this.movies = data)
    console.log(this.movies)
  }

}
