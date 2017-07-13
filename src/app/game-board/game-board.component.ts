import { Component, OnInit, Input } from '@angular/core';

import { IGame, DataService } from '../data.service';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  @Input()
  selectedGame: IGame;
  
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  moveInSquare(rowIndex: number, columnIndex: number): void {
    this.service
      .makeMove(this.selectedGame.id, rowIndex, columnIndex)
      .subscribe(
        game => {
          this.selectedGame.winner = game.winner;
          this.selectedGame.board = game.board;
        }
      )
  }

}
