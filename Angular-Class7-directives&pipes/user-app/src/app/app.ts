import { Component, model, signal } from '@angular/core';
import { UserCard } from './feature/users/components/user-card/user-card';
import { Header } from './core/components/header/header';
import { usersMock } from './feature/users/users-mock';
import { FilterPipe } from './core/pipes/filter-pipe';
import { FormsModule } from '@angular/forms';
import { User } from './feature/users/models/user-model';

@Component({
  selector: 'app-root',
  imports: [UserCard, Header, FilterPipe, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = signal<User[]>(usersMock);
  searchValue = model('');
}
