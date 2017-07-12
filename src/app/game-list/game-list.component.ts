import { Component, OnInit } from '@angular/core';

import { IGame, DataService } from '../data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [DataService]
})
export class GameListComponent implements OnInit {
  private games: IGame[];
  private error: string;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service
      .getAll()
      .subscribe(
        games => this.games = games,
        error => this.error = `ERROR! ${error}`
      )
  }

  getGame(id: number): void {
    alert(`You chose game ${id}`);
  }

}
