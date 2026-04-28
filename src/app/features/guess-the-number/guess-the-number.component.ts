import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss',
})
export class GuessTheNumberComponent {
  maxNumber = 100;
  maxAttempts = 10;

  secretNumber = this.randomNumber();
  attemptsLeft = this.maxAttempts;
  guessedNumber: number | null = null;
  feedback = '';
  gameOver = false;

  private randomNumber() {
    return Math.floor(Math.random() * this.maxNumber) + 1;
  }

  submitGuess() {
    if (
      !this.guessedNumber ||
      this.guessedNumber < 1 ||
      this.guessedNumber > this.maxNumber
    ) {
      this.feedback = `Enter a number between 1 and ${this.maxNumber}`;
      return;
    }

    this.attemptsLeft--;

    if (this.guessedNumber === this.secretNumber) {
      this.endGame(true);
    } else if (this.attemptsLeft === 0) {
      this.endGame(false);
    } else {
      this.feedback =
        this.guessedNumber > this.secretNumber ? 'Too High!' : 'Too Low!';
    }

    this.guessedNumber = null;
  }

  private endGame(win: boolean) {
    this.gameOver = true;
    this.feedback = win
      ? 'Correct!'
      : `Game Over! Number was ${this.secretNumber}`;
  }

  resetGame() {
    this.secretNumber = this.randomNumber();
    this.attemptsLeft = this.maxAttempts;
    this.guessedNumber = null;
    this.feedback = '';
    this.gameOver = false;
  }
}
