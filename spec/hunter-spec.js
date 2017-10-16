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
});
