import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { Parent } from "./components/parent/parent";

// const test = 'random string';

enum Course {
  REACT = 'REACT',
  ANGULAR = 'Angular',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Parent],
})
export class App {
  title = 'Started G1';
  year = 2025;
  // test = test; -> has to be assigned in the class to be used

  person: Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 45,
    country: 'USA',
  };

  inputValue = '';

  imgSrc = 'https://angular.dev/assets/images/ng-image.jpg';

  backgroundColor = 'lightblue';

  isBtnDisabled = true;

  isHeadingShown = false;

  fruits = ['apples', 'oranges', 'pears', 'cherries'];

  course = Course.REACT;

  printFullName(firstName: string, lastName: string) {
    console.log(`The person's full name is ${firstName} ${lastName}`);
  }

  onChangeCourse() {
    this.course =
      this.course === Course.ANGULAR ? Course.REACT : Course.ANGULAR;
    console.log('Course', this.course);
  }

  onInputChange(event: Event) {
    console.log('input change method event');

    const target = event.target as HTMLInputElement;

    this.inputValue = target.value;

    console.log(event);
  }
}
