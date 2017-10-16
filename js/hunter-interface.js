//import { Card } from './../js/card.js';
//import { Card } from './../js/game-board.js';
$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    let numberIn = $('#numberIn').val();
    let obj = new Obj(numberIn);
    let numberOut = obj.func();
    console.log(numberIn, numberOut);
    $('#numberOut').text(numberOut);
  });
});
