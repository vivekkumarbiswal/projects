import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgSwitch, NgSwitchCase, NgClass],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus() {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter === 0) {
      return 'neutral';
    } else {
      return 'nagative';
    }
  }
}
