var computer = 'X'; // the computer is X
var player = 'O'; // you are O
var turn = player; // the player goes first
var xwins = 0, owins = 0; // win tallies

$(document).ready(function() {
// $('.cell').click(function(){
//     var value = $(this).text();
//     $(this).text('O');// sets the text value
//
//     if (value === ''){
//         $(this).text = '0';
//     }
//     else if (value === 'O'){
//         $(this).text = 'X';
//     }
// });//end of .cell click
var player = 'O';

$('.cell').click(function(){
    //gets the text value
    var value = $(this).text();

    if(value === '') {// if empty
        $(this).text(player);
        playerWin(player);
        if(player === 'O') {
            //alternate the player
            player = 'X';
        }
            else { //assumed is X
                player = 'O';
                }

    }
});//end of cell click
playerWin = function(player){
    var cell1 = $('#1').text() === player;
    var cell2 = $('#2').text() === player;
    var cell3 = $('#3').text() === player;
    var cell4 = $('#4').text() === player;
    var cell5 = $('#5').text() === player;
    var cell6 = $('#6').text() === player;
    var cell7 = $('#7').text() === player;
    var cell8 = $('#8').text() === player;
    var cell9 = $('#9').text() === player;

    var count = 0;
    //possible wins in the game
    if(cell1 && cell2 && cell3 ||
    cell4 && cell5 && cell6 ||
    cell7 && cell8 && cell9 ||
    cell1 && cell4 && cell7 ||
    cell2 && cell5 && cell8 ||
    cell3 && cell6 && cell9 ||
    cell1 && cell5 && cell9 ||
    cell3 && cell5 && cell7){
        //declare winner
        $('.status').text('Player O wins');
    }
    else if (count === 9){
        //declare draw
        $('.status').text("It's a draw");
    }

};
function computerTurn() {
    var strategies = [];
    if (option('random')) strategies.push(strategyRandom);
    for (var i=0; i<strategies.length; i++) {
      var turn = strategies[i]();
      if (!turn) continue;
      val(turn[0], turn[1], computer);
      break;
    }
  }

  // go in a randomly selected blank space
  function strategyRandom() {
    // gather all the blank spots in an array
    var blanks = [];
    for (var x=0; x<3; x++) {
      for (var y=0; y<3; y++) {
        if (val(x,y)==='') cell.push([x,y]);
      }
    }
    // return a random entry in the array of blanks
    if (blanks.length>0) {
      var r = Math.floor((Math.random()*blanks.length));
      return blanks[r];
    }
    else return false;
  }

});//end of document ready
