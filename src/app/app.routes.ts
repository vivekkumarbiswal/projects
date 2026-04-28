import { Routes } from '@angular/router';
import { CounterComponent } from './features/counter/counter.component';
import { GuessTheNumberComponent } from './features/guess-the-number/guess-the-number.component';
import { ProfileCardComponent } from './features/profile-card/profile-card.component';
import { StopWatchComponent } from './features/stop-watch/stop-watch.component';
import { TodoComponent } from './features/todo/todo.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileCardComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'stop-watch',
    component: StopWatchComponent,
  },
  {
    path: 'guessTheNumber',
    component: GuessTheNumberComponent,
  },
];
