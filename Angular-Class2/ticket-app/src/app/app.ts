import { Component, signal } from '@angular/core';
import { TicketPanel } from './components/ticket-panel/ticket-panel';
import { Ticket, TicketStatus } from './models/ticket.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TicketPanel, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Issue tracker';

  ticketList: Ticket[] = [
    {
      id: 1,
      title: 'Mouse doesnt work',
      description: 'My mouse stopped working. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 2,
      title: 'Monitor doesnt work',
      description: 'My monitor stopped working. Please help!',
      assignee: 'Jane Doe',
      status: TicketStatus.NEW,
    },
    {
      id: 3,
      title: 'Keyboard doesnt work',
      description:
        'My keyboard stopped working. I spilled soda on it. Please help!',
      assignee: 'Jack Smith',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 4,
      title: 'Car doesnt work',
      description: 'My car stopped working. I spilled soda on it. Please help!',
      assignee: 'Jon Doe',
      status: TicketStatus.IN_PROGRESS,
    },
    {
      id: 5,
      title: 'Computer doesnt work',
      description:
        'My computer stopped working. It fell from the third floor! Please help!',
      assignee: 'Nick Jacobs',
      status: TicketStatus.DONE,
    },
  ];

  randomColor = signal<string>('');

  generateRandomColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);

    console.log(randomColorHex);

    this.randomColor.set(`#${randomColorHex}`);
  }
}
