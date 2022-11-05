import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  
  @Input() btnClass: string = '';
  @Input() route:string=''

  constructor() {}

  ngOnInit(): void {}
}
