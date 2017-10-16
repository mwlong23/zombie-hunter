//import { Card } from './../js/card.js';
import { GameBoard } from './../js/game-board.js';

describe('cardBoard', function () {
  let board = new GameBoard (5, 4)

  beforeEach(function() {

  });

  afterEach(function() {

  });

  it('should return 5', function () {
    expect(board.rows).toEqual(5);
  });

  it('should return 4', function () {
    expect(board.columns).toEqual(4);
  });

  it('should return 4', function () {
    // board.cards.forEach(function(card) {
    //   console.log("%%%%%%%% card.row: " + card.row + " car.column: " + card.column +  " card.isZombie:" + card.isZombie + " card.random: " + card.random + " card.shot: " + card.shot)
    // });
    expect(board.columns).toEqual(4);
  });

  it('should return 20', function () {
    let zombies = 0;
    board.cards.forEach(function(card) {
      if (card.isZombie) {
        zombies++;
      }
    });
    expect(zombies).toEqual(5);
  });

  it('should test the sort function', function () {
    board.sort()
    board.cards.forEach(function(card) {
      console.log("%%%%%%%% card.row: " + card.row + " car.column: " + card.column +  " card.isZombie:" + card.isZombie + " card.random: " + card.random + " card.shot: " + card.shot)
    });
    expect(board.columns).toEqual(4);
  });
});
