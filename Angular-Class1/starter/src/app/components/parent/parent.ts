import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  parentTitle = 'I come from the Parent';

  titleFromChild = '';

  onTitleRecieve(newTitle: string) {
    this.titleFromChild = newTitle;
    console.log('Event received from the child');
  }
}
