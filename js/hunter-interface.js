//import { Card } from './../js/card.js';
import { GameBoard } from './../js/game-board.js';
let board = new GameBoard (3, 6);
$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    console.log("hello")
    board.cards.forEach(function(card) {
      let position = "#row" + (card.row + 1) + "-column" + (card.column + 1)
      if (card.isZombie) {
        $(position + " .infected").show();
        $(position + " .healthy").hide();
      } else {
        $(position + " .infected").hide();
        $(position + " .healthy").show();
      }
    });
  });
});
