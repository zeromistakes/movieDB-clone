import {Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import {SearchService} from "../../../search.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  totalPages: number = 0;
  @Output() changePageEvent = new EventEmitter();

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
    this.getTotalPages()
  }

  getTotalPages() {
    this.searchService.resultData.subscribe((data:any) => {
      this.totalPages = data.total_pages;
      console.log(this.totalPages);
    });
  }

  getNextPage(p:number):number {
    return this.currentPage + p;
  }
  getPrevPage(p:number):number {
    return this.currentPage - p;
  }

  emitNextPage(p:number) {
    this.changePageEvent.emit(this.currentPage + p);
  }
  emitPrevPage(p:number) {
    this.changePageEvent.emit(this.currentPage - p);
  }

}
