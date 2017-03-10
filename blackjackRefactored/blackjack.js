
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  var name = this.point;
  if (name === 11) {
    name = 'jack';
  } else if (name === 12) {
    name = 'queen';
  } else if (name === 13) {
    name = 'king';
  } else if (name === 1) {
    name = 'ace';
  }
  return 'images/' + name + '_of_' + this.suit + '.png';
};

function Hand() {
  this.cards = [];
}

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
};

Hand.prototype.getPoints = function() {
  var sortedCards = this.cards.slice(0);
  function compare(one, other) {
    return other.point - one.point;
  }
  sortedCards.sort(compare);
  var sum = sortedCards.reduce(function combine(currentSum, card) {
    var point = card.point;
    if (point > 10 && point <= 13) {
      point = 10;
    } else if (point === 1) {
      if (currentSum + 11 <= 21) {
        point = 11;
      }
    }
    return currentSum + point;
  }, 0);
  return sum;
};

function Deck() {
  this.cards = [];
  for (var i = 1; i <= 13; i++) {
    this.cards.push(new Card(i, 'diamonds'));
    this.cards.push(new Card(i, 'spades'));
    this.cards.push(new Card(i, 'hearts'));
    this.cards.push(new Card(i, 'clubs'));
  }
}

Deck.prototype.draw = function() {
  var card = this.cards.pop();
  return card;
};

Deck.prototype.numCardsLeft = function() {
  return this.cards.length;
};

Deck.prototype.shuffle = function() {
  for (var i = 0; i < this.cards.length; i++) {
    var a = Math.floor(Math.random() * 52);
    var b = Math.floor(Math.random() * 52);

    var temp = this.cards[a];
    this.cards[a] = this.cards[b];
    this.cards[b] = temp;
  }
};
//----------------------------code.js--------//
$(function domReady() {

  $('#play-again').hide();

  var deck, dealerHand, playerHand;

  setupNewGame();

  updateScoreDisplay();

  $('#deal-button').click(function() {
    var card, cardUrl;

    dealACard(playerHand, '#player-hand');
    dealACard(dealerHand, '#dealer-hand');
    dealACard(playerHand, '#player-hand');
    dealACard(dealerHand, '#dealer-hand');

    console.log('playerHand', playerHand);
    console.log('dealerHand', dealerHand);

    $('#deal-button').hide();
  });

  $('#hit-button').click(function() {
    dealACard(playerHand, '#player-hand');
    // check for bust
    if (playerHand.getPoints() > 21) {
      $('#messages').text('You bust!');
      gameOver();
    }
  });


  $('#stand-button').click(function() {
    while (dealerHand.getPoints < 17) {
      dealACard(dealerHand, '#dealer-hand');
    }
    // check for bust
    if (dealerHand.getPoints > 21) {
      // dealer busts
      $('#messages').text('Dealer busts! You win!');
  } else if (playerHand.getPoints > 21) {
      // player busts
      $('#messages').text('You bust!');
    } else {
      // determine winner
      var dealerPoints = dealerHand.getPoints();
      var playerPoints = playerHand.getPoints();
      var message;
      if (dealerPoints > playerPoints) {
        message = 'You lose!';
      } else if (dealerPoints < playerPoints) {
        message = 'You win!';
      } else {
        message = 'Push.';
      }
      $('#messages').text(message);
    }
    gameOver();
  });


  $('#play-again').click(function() {
    $('#deal-button').show();
    $('#hit-button').show();
    $('#stand-button').show();
    $('#play-again').hide();
    $('#player-hand').html('');
    $('#dealer-hand').html('');
    $('#messages').text('');
    $('#player-points').text('');
    $('#dealer-points').text('');
    setupNewGame();
  });

  function gameOver() {
    $('#hit-button').hide();
    $('#stand-button').hide();
    $('#play-again').show();
  }

  function updateScoreDisplay() {
    var dealerPoints = dealerHand.getPoints();
    $('#dealer-points').text(dealerPoints);
    var playerPoints = playerHand.getPoints();
    $('#player-points').text(playerPoints);
  }

  function dealACard(hand, elementSelector) {
    card = deck.draw();
    hand.addCard(card);
    cardUrl = card.getImageUrl();
    //cardUrl = getCardImageUrl(card);
    $(elementSelector).append(
      '<img src="' + cardUrl + '">'
    );
    updateScoreDisplay();
  }

  function setupNewGame() {
    deck = new Deck();
    deck.shuffle();
    // dealerHand = [];
    // playerHand = [];
    dealerHand = new Hand();
    playerHand = new Hand();
  }

}); // End of dom ready
