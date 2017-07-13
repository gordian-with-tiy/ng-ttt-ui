import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export interface IGame {
  id: number;
  winner: number;
  humanMovesFirst: boolean;
  board: number[][];
  numberOfMoves(): number;
}

class Game implements IGame {
  id: number;
  winner: number;
  humanMovesFirst: boolean;
  board: number[][];

  constructor(game: IGame) {
    this.id = game.id;
    this.winner = game.winner;
    this.humanMovesFirst = game.humanMovesFirst;
    this.board = game.board;
  }
 
  numberOfMoves(): number {
    return this.board
      .reduce((acc, row) => {
        return acc + row.reduce((a, c) => a + (c > 0? 1 : 0), 0);
      }, 0);
  }
}

@Injectable()
export class DataService {
  endpoint = 'http://localhost:10010/games';

  constructor(private http: Http) {}

  getAll(): Observable<IGame[]> {
    return this.http
      .get(this.endpoint)
      .map(response => response.json())
      .map(games => games.map(g => new Game(g)));
  }

  create(humanMovesFirst: boolean): Observable<IGame> {
    return this.http
      .post(this.endpoint, { humanMovesFirst })
      .map(response => response.json());
  }

  makeMove(id: number, rowIndex: number, columnIndex: number)
    : Observable<IGame> {
    return this.http
      .patch(`${this.endpoint}/${id}`, { rowIndex, columnIndex })
      .map(response => response.json());
  }

  deleteGame({ id }): Observable<void> {
    return this.http
      .delete(`${this.endpoint}/${id}`)
      .map(response => {});
  }

}
