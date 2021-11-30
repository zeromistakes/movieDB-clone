import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../search.service";

@Component({
  selector: 'app-side-categories',
  templateUrl: './side-categories.component.html',
  styleUrls: ['./side-categories.component.scss']
})
export class SideCategoriesComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

}
