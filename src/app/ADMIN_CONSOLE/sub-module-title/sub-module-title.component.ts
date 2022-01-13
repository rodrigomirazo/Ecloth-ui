import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sub-module-title',
  templateUrl: './sub-module-title.component.html',
  styleUrls: ['./sub-module-title.component.css']
})
export class SubModuleTitleComponent implements OnInit {

  @Input()
  titleName: string;

  constructor() { }

  ngOnInit() {
  }

}
