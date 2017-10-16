import { Card } from './../js/card.js';
export class GameBoard {
  constructor(rows, columns) {
    this.cards = [];
    this.rows = rows;
    this.columns = columns;
    let zombies = Math.floor((rows * columns) / 4)

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let random = Math.random();
        this.cards.push(new Card(i, j, random))
      }
    }
    this.cards.sort(function(a, b){
      return b.random - a.random;
    });
    for (let i = 0; i < zombies; i++) {
      console.log ("$$$$$$$$$$$$ i =: " + i);
      this.cards[i].isZombie = true;
    }
  }

  sort() {
    let that = this;
    this.cards.sort(function(a, b){
      return (a.row * that.columns + a.column) - (b.row * that.columns + b.column);
    });
  }
}
