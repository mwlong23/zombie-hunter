//import { Card } from './../js/card.js';
import { GameBoard } from './../js/game-board.js';
$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    console.log("hello")
    let board = new GameBoard (3, 6)
    board.cards.forEach(function(card) {
      let position = "#row" + (card.row + 1) + "-column" + (card.column + 1)
      if (card.isZombie) {
        $(position + " .infected").show();
        console.log("show: " + position + " .infected");
        $(position + " .healthy").hide();
        console.log("hide: " + position + " .healthy");
      } else {
        $(position + " .infected").hide();
        console.log("hide: " + position + " .infected");
        $(position + " .healthy").show();
        console.log("show: " + position + " .healthy");
      }
    });
  });
});
