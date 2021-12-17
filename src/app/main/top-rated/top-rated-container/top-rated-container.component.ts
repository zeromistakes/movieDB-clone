import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../../filter.service";

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss']
})
export class TopRatedContainerComponent implements OnInit {
  movies:any;
  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
    this.subscribeToResultData();
  }

  subscribeToResultData() {
    this.filterService.filteredData.subscribe((data:any) => {
      this.movies = data;
    });
  }
}
