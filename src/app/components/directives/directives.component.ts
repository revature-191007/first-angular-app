import { Component, OnInit } from '@angular/core';
import Person from 'src/app/models/Person';
/**
 * Directives
 * Directives are a category of things in Angular which are
 * responsible for building and manipulating the DOM.
 *
 * There are three categories of directives:
 *
 * 1) Components
 * 2) Structural Directives
 *      These are responsible for manipulating the DOM directly.
 *          *ngIf="expression" - Renders an element given a predicate
 *              expression
 *          *ngFor="let item of items" - Renders a collection
 *              of items iteratively into the DOM.
 *          *ngSwitch - Like *ngIf but a switch statement
 *
 *
 * 3) Attribute Directives
 *      Responsible for defining mechanisms by which the DOM
 *      can be manipulated via 'attributes'. These are mostly
 *      used by libraries to that you then leverage. We won't
 *      see any examples of these core Angular.
 *
 *
 * @export
 * @class DirectivesComponent
 */
@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
    lightSwitch = false;
    people: Person[];
    count: number;
    inputFirstName = '';
    inputLastName = '';
    currentTime = Date();

    ngOnInit() {
        this.people = [{
            firstName: 'Abby',
            lastName: 'Abs'
        }, {
            firstName: 'Billy',
            lastName: 'Biceps'
        }, {
            firstName: 'Cindy',
            lastName: 'Cinderblocks'
        }];
        this.count = 0;
    }

    incrementCount() {
        this.count = (this.count + 1) % 10;
    }

    submitPerson() {
        // Probably would want to validate data here

        // Push new person into list
        this.people.push({
            firstName: this.inputFirstName,
            lastName: this.inputLastName
        });
        // Clear input values
        this.inputFirstName = '';
        this.inputLastName = '';
        console.log(this.people);
    }
}
