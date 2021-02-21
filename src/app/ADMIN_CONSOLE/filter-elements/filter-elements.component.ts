import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'filter-elements',
  templateUrl: './filter-elements.component.html',
  styleUrls: ['./filter-elements.component.css']
})
export class FilterElementsComponent implements OnInit {

  @Input()
  startDate: Date;
  @Input()
  endDate: Date;
  
  @Output()
  dateOutput: EventEmitter<any> = new EventEmitter<any>();

  public events: string[] = [];
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.startDate);
    
    this.range.controls['start'].setValue(this.startDate);
    this.range.controls['end'].setValue(this.endDate);

  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    //console.log(event.value);
  }

  applyDate() {
    console.log(this.range.value.start);
    console.log(this.range.value.end);

    this.dateOutput.emit(this.range.value);
  }


}
