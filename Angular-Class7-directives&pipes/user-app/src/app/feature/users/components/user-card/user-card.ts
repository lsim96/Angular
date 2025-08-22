import { Component, input } from '@angular/core';
import { User } from '../../models/user-model';

import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../../../../core/pipes/shorten-pipe';
import { HoverShadowDirective } from '../../../../core/directives/hover-shadow';
import { ToggleAddressDirective } from '../../../../core/directives/toggle-address-directive';

@Component({
  selector: 'app-user-card',
  imports: [
    HoverShadowDirective,
    ToggleAddressDirective,
    CommonModule,
    ShortenPipe,
  ],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  user = input.required<User>();
}
