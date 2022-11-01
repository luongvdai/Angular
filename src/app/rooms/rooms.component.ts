import { Component, OnInit } from '@angular/core';
import { Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  count = 10;
  name = 'Rooms';
  display = false;
  constructor() {}

  ngOnInit(): void {}
  toggle(): void {
    this.display = !this.display;
  }
  room: Rooms ={
    total: 20,
    available: 10,
    booked: 5,
  }
}
