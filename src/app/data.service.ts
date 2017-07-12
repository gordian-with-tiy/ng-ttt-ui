import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

export interface IGame {
  id: number;
  winner: number;
}

@Injectable()
export class DataService {
  server = 'http://localhost:10010';

  constructor(private http: Http) {
    console.log('I AM ALIVE!!!!!!!');
  }

  getAll(): Observable<IGame[]> {
    return this.http
      .get(`${this.server}/games`)
      .map(response => response.json());
  }

  create(humanMovesFirst: boolean): Observable<IGame> {
    return this.http
      .post(`${this.server}/games`, { humanMovesFirst })
      .map(response => response.json());
  }

}
