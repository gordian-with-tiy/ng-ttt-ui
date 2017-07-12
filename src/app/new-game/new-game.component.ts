import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [DataService]
})
export class NewGameComponent implements OnInit {
  private message: string;

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
  }

  createGame() {
    this.message = 'One moment, please...';
    this.service
      .create(true)
      .subscribe(
        () => this.message = '',
        error => this.message = `ERROR! ${error}`
      );
  }

}
