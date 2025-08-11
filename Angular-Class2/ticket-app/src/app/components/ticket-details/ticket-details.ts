import {
  AfterViewInit,
  Component,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  imports: [NgClass],
  templateUrl: './ticket-details.html',
  styleUrl: './ticket-details.scss',
})
export class TicketDetails implements OnInit, OnDestroy, AfterViewInit {
  selectedTicket = input<Ticket>(null);

  hideOutput = output();

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ON INIT CALLED');
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW CALLED');
  }

  ngOnDestroy() {
    console.log('ON DESTROYED CALLED');
  }

  onClearClick() {
    this.hideOutput.emit();
  }
}
