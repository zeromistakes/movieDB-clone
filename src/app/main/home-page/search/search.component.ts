import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../../search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputQuery = '';
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    this.inputQuery = e.target.query.value;
    this.searchService.getSearchData(this.inputQuery);
    e.target.query.value = '';
    console.log(this.inputQuery);
    this.router.navigateByUrl('/search-results');
  }
}
