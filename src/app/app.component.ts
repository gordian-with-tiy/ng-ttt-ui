import { Component } from '@angular/core';

import { IGame } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedGame: IGame;

  onGameSelected(game: IGame): void {
    this.selectedGame = game;
  }
}
