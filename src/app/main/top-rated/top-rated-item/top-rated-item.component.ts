import {Component, Input, OnInit} from '@angular/core';
import {FilteredMovieResult} from "../../../../interfaces/filteredMovieResult";

@Component({
  selector: 'app-top-rated-item',
  templateUrl: './top-rated-item.component.html',
  styleUrls: ['./top-rated-item.component.scss']
})
export class TopRatedItemComponent implements OnInit {
  @Input() movie: FilteredMovieResult = {
    id: 0,
    original_title:"",
    vote_average: 0,
    poster_path: "",
    release_date: "",
  };
  constructor() { }

  ngOnInit(): void {
  }

}
