$(document).ready(function() {

  var player = 'O';

  $('.cell').click(function() {
    // gets the text value
    //debugger
    var value = $(this).text();

    if (value === '') { // if unoccupied
      $(this).text(player);
      $(this).addClass('clicked');

      if (playerWin2(player)) {
        $('.status').text('Player ' + player + ' wins');
        $('.boardgame').addClass('gameover');
      } else if (isDraw()) {
        $('.status').text('Draw');
        $('.boardgame').addClass('gameover');
      }
      // alternate the player
      if (player === 'O') {
        player = 'X';
      } else { // assumed is X
        player = 'O';
      }
    }
  }); // End of .box click

  var isDraw = function() {
    var boardValues = $.makeArray($('.cell').map(function() {
      return $(this).text();
    }));

    return boardValues.every(function(value) {
      return value.length > 0;
    });

  }; // End of isDraw

  $('#reset').click(function(){
      reset(table);
      displayPlayNextPlayer(turn, player);
  });

  var winningCombos = [
    [2, 5, 8],
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var playerWin2 = function(player) {
    var values = $.makeArray($('.cell').map(function() {
      return $(this).text();
    }));

    // If player occuppies all 3 cells of any winning combo
    return winningCombos.some(function(combo) {
      // If all 3 cells of a combo are occupied by player
      return combo.every(function(position) {
        // If a cell is occupied by player
        return values[position] === player;
      });
    });
  };

 var playerWin = function(player){
    var cell1 = $('#1').text() === player;
    var cell2 = $('#2').text() === player;
    var cell3 = $('#3').text() === player;
    var cell4 = $('#4').text() === player;
    var cell5 = $('#5').text() === player;
    var cell6 = $('#6').text() === player;
    var cell7 = $('#7').text() === player;
    var cell8 = $('#8').text() === player;
    var cell9 = $('#9').text() === player;

    //possible wins in the game
    if(cell1 && cell2 && cell3 ||
    cell4 && cell5 && cell6 ||
    cell7 && cell8 && cell9 ||
    cell1 && cell4 && cell7 ||
    cell2 && cell5 && cell8 ||
    cell3 && cell6 && cell9 ||
    cell1 && cell5 && cell9 ||
    cell3 && cell5 && cell7){
        return true;
    } else{
        return false;
    }
 }

});//end of document ready
