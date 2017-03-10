function Card(num, suit, sum) {
    this.point = num;
    this.suit = suit;
    this.total = sum;

  }

Card.prototype.getImageUrl = function () {
  //return 'images/' + this.point + '_of_diamonds.png';

  if(this.point === 11){
    return ('images/jack_of_'+ this.suit +'.png');
  }
  else if (this.point === 12) {
    return ('images/queen_of_' + this.suit + '.png');
  }
  else if (this.point === 13) {
    return('images/king_of_' + this.suit + '.png');
  }
  else if (this.point === 1) {
      return('images/ace_of_' + this.suit +'.png');
  }
  else{
    return 'images/' + this.point + '_of_' + this.suit + '.png';
  }
};


function Hand(){
    this.cards = [];
}
Hand.prototype.addCard= function(card) {
    this.cards.push(card);

};



Hand.prototype.getPoints= function(sum){

    // var sum  =  this.cards.reduce(function combine(currentSum, card){
    //     var point  = card.point;
    // });
    var sum = 0;
    for (var i = 0; i < this.cards.length; i++){
        var card = this.cards[i];

        if (card.point > 10){
            card.point = 10;
        }
        sum = sum + card.point;
    }

    return sum;
};


function Deck(){
    this.cards = [];
    for (var i=1; i<=13; i++){
        this.cards.push(new Card(i, 'diamonds'));
        this.cards.push(new Card(i, 'spades'));
        this.cards.push(new Card(i, 'hearts'));
        this.cards.push(new Card(i, 'clubs'));
    }
}
Deck.prototype .draw= function(){
    var cards = this.cards.pop
}

Deck.prototype = function(){
    return card;
}

Deck.prototype.numCardsLeft = function(){
    return this.cards.length;
}

Deck.prototype.shuffle = function(){
    for (var i = 0; i< this.cards.length; i++){
        var a = Math.floor(Math.random()*52);
        var b = Math.floor(Math.random()*52);

        var temp = this.cards[a];
        this.cards[a] = this.cards[b];
        this.cards[b] = temp;
    }
}
