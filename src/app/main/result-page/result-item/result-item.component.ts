import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() movie: any;
  constructor() { }

  ngOnInit(): void {
  }

}
