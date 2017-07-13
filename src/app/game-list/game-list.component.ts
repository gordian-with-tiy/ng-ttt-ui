import { Component, OnInit } from '@angular/core';

import { IGame, DataService } from '../data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private games: IGame[];
  private error: string;
  private selectedGame: IGame;

  constructor(private service: DataService) {
    this.games = [];
  }

  ngOnInit() {
    this.service
      .getAll()
      .subscribe(
        games => this.games = games,
        error => this.error = `ERROR! ${error}`
      )
  }

  showGame(game: IGame): void {
    this.selectedGame = game;
  }

  deleteGame(game, e: Event) {
    e.stopPropagation();
    if (game.id === this.selectedGame.id) {
      this.selectedGame = null;
    }
    this.service
      .deleteGame(game)
      .subscribe(
        () => this.ngOnInit()
      );
  }

  get ongoingGames() {
    return this.games
      .filter(g => g.winner === undefined);
  }

  get finishedGames() {
    return this.games
      .filter(g => g.winner !== undefined);
  }

}
