import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  breadData = [];

  constructor() {
    this.addItems();
  }

  addItems() {
    const start = this.breadData.length + 1;
    this.breadData.push(
      `Page ${start}`,
      `Page ${start + 1}`,
      `Page ${start + 2}`
    );
  }

}
