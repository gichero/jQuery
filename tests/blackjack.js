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
    console.log(cards);
    function add(cards, i){
        var score = cards[i].point;
        console.log("score:"+score);
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
            console.log(card.point);
            console.log(card.suit);
            console.log(card);
            var copy = Object.assign({}, card)

            deck.push(copy);
            //console.log(deck);
        }
    }
    console.log(deck)
    return deck;
}
var deck = newDeck();

var stringRepresentation = deck.map(function(card) {
  return card.point + ' of ' + card.suit;

}).join(',');
