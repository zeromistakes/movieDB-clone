import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../search.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

}
