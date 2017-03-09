

$(document).ready(function(){

var player = 'O';

$('.cell').click(function(){
    //gets the text value
    var value = $(this).text();

    if (value === '') { // if unoccupied
      $(this).text(player);
      $(this).addClass('clicked');

      if (playerWin2(player)) {
        $('.status').text('Player ' + player + ' wins');
        $('.gameboard').addClass('gameover');
      } else if (isDraw()) {
        $('.status').text('Draw');
        $('.gameboard').addClass('gameover');
      }


        if(player === 'O') {
            //alternate the player
            player = 'X';
        }
        else { //assumed is X
            player = 'O';
            }

    //}
}//end of cell click
var isDraw = function() {
  var boardValues = $.makeArray($('.box').map(function() {
    return $(this).text();
}));

return boardValues.every(function(value) {
  return value.length > 0;
});

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
    // else if (cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8 && cell9 === ''){
    //     //declare draw
    //     $('.status').text("It's a draw");
    // }

};
});
});
});//end of document ready
