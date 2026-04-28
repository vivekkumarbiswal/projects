import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  name: string = 'Vivek Kumar Biswal';
  age: number = 29;
  description: string = 'A passonate Angular Developer';
}
