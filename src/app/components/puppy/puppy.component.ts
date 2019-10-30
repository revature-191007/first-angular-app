import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})
export class PuppyComponent implements OnInit {
  inputValue = '';

  @Output()
  submitEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  data: string[];

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  submitPuppy() {
    console.log(this.inputValue);
    this.submitEvent.emit(this.inputValue);
    this.inputValue = '';
  }

}
