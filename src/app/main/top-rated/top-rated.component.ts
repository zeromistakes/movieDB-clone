import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../filter.service";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }
}
