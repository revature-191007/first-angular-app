import { Component } from '@angular/core';

/**
 * Angular Binding
 * Binding syntax provides a mechanism for
 * accessing template information and executing
 * TypeScript logic from the template.
 * 
 * {{expression}} - 1-way data binding
 * [property]="expression" - Property binding
 * (event)="expression" - event binding
 *    calls expression when event is triggered
 * [(ngModel)]="boundProperty"
 *    Note: You need to add the FormsModule to
 * your app.module to use this!
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-project!!!';
  count = 0;
  input = '';

  buttonClick() {
    this.count += 1;
  }

  constructor() {
    setInterval(() => {
      this.input += 'c';
    }, 500);
  }

}
