import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'currency converter';
  name = 'Blossom';
  counter = 0;

  increaseCounter() {
    this.counter++;
  }
}
