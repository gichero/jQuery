
function getCardImageUrl ({point: i, suit: str}){
    var suit = str;
    if (i===1){
        return 'images/' + 'ace' + '_of_' +suit+ '.png';
    }
    else if (i===11){
        return 'images/' + 'jack' + '_of_' +suit+ '.png';
    }
    else if (i===12){
        return 'images/' + 'queen' + '_of_' +suit+ '.png';
    }
    else if (i===13){
        return 'images/' + 'king' + '_of_' +suit+ '.png';
    }
    else{
        return 'images/' + i + '_of_' +suit+ '.png';
    }
}

function calculatePoints(cards){
    function compare(a, b){
        return a.point-b.point;
    }
    cards.sort(compare);
    function add(cards, i){
        var score = cards[i].point;
        if(score===11){
            score = 10;
        }
        else if (score===12) {
            score = 10;
        }
        else if (score===13) {
            score = 10;
        }
        sum += score;
        return sum;

    }
    if(cards[0].point === 1){
        var sum = 0;
        for(var i=1; i<cards.length; i++){
            sum = add(cards, i);
            console.log("sum1: "+sum);
        }
        if(sum + 11 > 21){
            sum += 1;
        }else{
            sum += 11;
        }
    }else{
        sum = 0;
        for(var i=0; i<cards.length; i++){
            sum = add(cards, i);
        }
    }
    console.log("sum2: "+sum);
    return sum;
}
function newDeck(){
    var suit = ['spades', 'hearts', 'clubs', 'diamonds'];
    var card = {point: 0, suit: ''};
    var deck = [];
    for(var i = 1; i<14; i++){
        for(var j = 0; j<4; j++){
            card.point = i;
            card.suit = suit[j];
            var copy = Object.assign({}, card);
            deck.push(copy);
        }
    }
    return deck;
}

$(document).ready(function(){
    var bet = 5;
    $(".bet_button").addClass("disable");
    var deck = newDeck();
    var new_deck = _.shuffle(deck);
    var bust = false;

    var stringRepresentation = deck.map(function(card) {
      return card.point + ' of ' + card.suit;
    }).join(',');

    var dealer_cards=[];

    var player_cards=[];

    var dealer_money=500;

    var player_money=500;

    $("#bet").text(bet);
    $("#dealer-money").text(dealer_money);
    $("#player-money").text(player_money);

    function restart(){
        bet=0;
        dealer_cards=[];
        player_cards=[];
        new_deck = _.shuffle(deck);
        bust = false;
        $('#dealer-hand').empty();
        $('#player-hand').empty();
        $('#message').empty();
        $('.points').empty();
        $('#deal-button').removeClass('disable');
    }
    function checkBust(cards){
        if(calculatePoints(cards)>21){
            bust = true;
        }
    }
    function dealCard(div, cards,label,character){
        var copy = Object.assign({}, new_deck[0]);
        cards.push(copy);
        var image = document.createElement("IMG");
        $(image).attr("src", getCardImageUrl(new_deck[0]));
        $(image).addClass("card");
        $(div).append(image);
        $(label).text(calculatePoints(cards));
        new_deck.splice(0,1);
        checkBust(cards);
        if(bust === true){
            $("#message").text(character+" Busted!");
            if(character === "Player"){
                player_money -= bet;
                dealer_money += bet;
            }else if(character === "Dealer"){
                dealer_money -= bet;
                player_money += bet;
            }
            $("#dealer-money").text(dealer_money);
            $("#player-money").text(player_money);
            if(player_money<0 ||dealer_money<0){
                dealer_money=500;
                player_money=500;
                $("#player-money").text(player_money);
                $("#dealer-money").text(dealer_money);
                if(player_money<0){
                    setTimeout(function(){$('#message').text('Player ran out of money, go get more! Maybe sell your house...');},2000);
                }else{
                    setTimeout(function(){$('#message').text('Dealer ran out of money, yayyyy!');},2000);
                }
                setTimeout(function(){$('#message').text('Starting new game...');},4000);
                setTimeout(restart, 7500);
            }else{
                setTimeout(function(){$('#message').text('Starting new game...');},2000);
                setTimeout(restart, 5500);
            }
        }
    }



    $('#add_5').on('click', function(){
        bet += 5;
        $("#bet").text(bet);
    });

    $('#add_10').on('click', function(){
        bet += 10;
        $("#bet").text(bet);
    });

    $('#add_25').on('click', function(){
        bet += 25;
        $("#bet").text(bet);
    });

    $('#add_50').on('click', function(){
        bet += 50;
        $("#bet").text(bet);
    });

    $('#add_100').on('click', function(){
        bet += 100;
        $("#bet").text(bet);
    });

    $('#add_500').on('click', function(){
        bet += 500;
        $("#bet").text(bet);
    });

    $('#deal-button').on('click', function(){

        var copy = Object.assign({}, new_deck[0]);

        for(var i=0; i<2; i++){
            dealCard("#dealer-hand", dealer_cards, "#dealer-points", "Dealer");
            console.log(dealer_cards);
            stringRepresentation = dealer_cards.map(function(card) {
              return card.point + ' of ' + card.suit;
            }).join(',');
            console.log(stringRepresentation);
        }
        for(var i=0; i<2; i++){
            dealCard("#player-hand",player_cards, "#player-points", "Player");
            console.log(player_cards);
            stringRepresentation = player_cards.map(function(card) {
              return card.point + ' of ' + card.suit;
            }).join(',');
            console.log(stringRepresentation);
        }
        $(this).addClass('disable');
        $(".bet_button").removeClass("disable");
    });

    $('#hit-button').on('click', function(){
        dealCard("#player-hand",player_cards,"#player-points", "Player");
        if(calculatePoints(player_cards)===21){
            $('#message').text('Player Wins!');
            player_money += bet;
            dealer_money -= bet
            $("#player-money").text(player_money);
            $("#dealer-money").text(dealer_money);
            setTimeout(function(){$('#message').text('Starting new game...');},2000);
            setTimeout(restart, 5500);
        }
    });

    $('#stand-button').on('click', function(){
        while(calculatePoints(dealer_cards)<18){
            dealCard("#dealer-hand",dealer_cards,"#dealer-points", "Dealer");
        }
        if(bust === false){
            if(calculatePoints(dealer_cards) > calculatePoints(player_cards)){
                $('#message').text('Dealer Wins!');
                player_money -= bet;
                dealer_money += bet
            }
            else if (calculatePoints(player_cards) > calculatePoints(dealer_cards)) {
                $('#message').text('Player Wins!');
                player_money += bet;
                dealer_money -= bet
            }
            else{
                $('#message').text('Draw!');
            }
            $("#player-money").text(player_money)
            $("#dealer-money").text(dealer_money)
            if(player_money<0 ||dealer_money<0){
                dealer_money=500;
                player_money=500;
                $("#player-money").text(player_money)
                $("#dealer-money").text(dealer_money)
                if(player_money<0){
                    setTimeout(function(){$('#message').text('Player ran out of money, go get more! Maybe sell your house...');},2000);
                }else{
                    setTimeout(function(){$('#message').text('Dealer ran out of money, yayyyy!');},2000);
                }
                setTimeout(function(){$('#message').text('Starting new game...');},4000);
                setTimeout(restart, 7500);
            }else{
                setTimeout(function(){$('#message').text('Starting new game...');},2000);
                setTimeout(restart, 5500);
            }


        }
    });

    $('#reset-button').on('click', function(){
        var dealer_money=500;
        var player_money=500;
        $("#player-money").text(player_money)
        $("#dealer-money").text(dealer_money)
        setTimeout(function(){$('#message').text('Starting new game...');},2000);
        setTimeout(restart, 5500);
    })


});
