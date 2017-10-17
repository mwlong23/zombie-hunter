//import { Card } from './../js/card.js';
import { GameBoard } from './../js/game-board.js';
let board;
$(document).ready(function () {






  $('.btn').click(function (e) {
    e.preventDefault();
     board = new GameBoard (3, 6);



    $(".shotgun-blast").hide()
    console.log("hello \n")
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

    //starts a countdown timer at 30 seconds, doesnt stop at 0 yet. 
    var duration = moment.duration({
        'seconds': 30,
            'hour': 0,
            'minutes': 0
    });

    var timestamp = new Date(0,0,0,0,0,30);
    var interval = 1;
    setInterval(function () {
        timestamp = new Date(timestamp.getTime() + interval*1000);

        duration = moment.duration(duration.asSeconds() - interval, 'seconds');
        //.asSeconds()
        $('#time-remaining').text( Math.round(duration.asSeconds()) + 's'); //.seconds()
    }, 1000);
  });


  jQuery(".col-xs-2").click(function() {
    var clickedMinionID = jQuery(this).attr("id");
    board.cards.forEach(function(card) {
      let position = "row" + (card.row + 1) + "-column" + (card.column + 1)
      if (clickedMinionID == position){
        card.shot = true;
        $("#" + position + " .infected").hide();
        $("#" + position + " .healthy").hide();
        $("#" + position + " .shotgun-blast").show();
      }
    });

    board.cards.forEach(function(card) {
      let position = "row" + (card.row + 1) + "-column" + (card.column + 1)
      console.log("shot status:  " + card.shot + "\nrow: " + card.row + "\ncolumn: " + card.column)
    });
  });
});
