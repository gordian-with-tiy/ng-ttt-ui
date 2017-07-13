import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  private message: string;

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
  }

  createHumanGame() {
    this.message = 'One moment, please...';
    let subscriprtion = this.service
      .create(true)
      .subscribe(
        () => this.message = '',
        error => this.message = `ERROR! ${error}`
      );
  }

  createComputerGame() {
    this.message = 'One moment, please...';
    this.service
      .create(false)
      .subscribe(
        () => this.message = '',
        error => this.message = `ERROR! ${error}`
      );
  }

}
