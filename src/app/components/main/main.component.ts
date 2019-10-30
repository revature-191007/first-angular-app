import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  puppies: string[] = [];

  constructor() { }

  ngOnInit() {
    this.puppies.push('spot');
    this.puppies.push('fido');
  }

  handleSubmission(puppy: string) {
    console.log('called');
    this.puppies.push(puppy);
  }

}
