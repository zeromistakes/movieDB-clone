import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-rated-item',
  templateUrl: './top-rated-item.component.html',
  styleUrls: ['./top-rated-item.component.scss']
})
export class TopRatedItemComponent implements OnInit {
  @Input() movie: any;
  constructor() { }

  ngOnInit(): void {
  }

}
