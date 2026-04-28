import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  imports: [CommonModule],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.scss',
})
export class StopWatchComponent {
  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }
  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 0.1;
    }, 100);
    console.log('Stopwatch Started.');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch Stopped');
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log('Stopwatch reset.');
  }
}
