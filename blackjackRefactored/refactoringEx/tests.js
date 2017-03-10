describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
    card = new Card(6, 'spades');
    expect(card.point).toEqual(6);
    expect(card.suit).toEqual('spades');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });

});

describe('Hand', function() {

  it('can instantiate', function() {
    var hand = new Hand();
  });

  it('can add card', function() {
    var hand = new Hand();
    hand.addCard(new Card(5, 'diamonds'));
  });

  it('can calculate points with one card', function() {
    var hand = new Hand();
    hand.addCard(new Card(5, 'diamonds'));
    expect(hand.getPoints()).toEqual(5);

    hand = new Hand();
    hand.addCard(new Card(10, 'diamonds'));
    expect(hand.getPoints()).toEqual(10);
  });

  it('can calculate points with two cards', function() {
    var hand = new Hand();
    hand.addCard(new Card(5, 'diamonds'));
    hand.addCard(new Card(7, 'diamonds'));
    expect(hand.getPoints()).toEqual(12);
  });

  it('can calculate points with three cards', function() {
    var hand = new Hand();
    hand.addCard(new Card(5, 'diamonds'));
    hand.addCard(new Card(7, 'diamonds'));
    hand.addCard(new Card(8, 'diamonds'));
    expect(hand.getPoints()).toEqual(20);
  });

  it('can calculate points with face cards - 10 points', function() {
    var hand = new Hand();
    hand.addCard(new Card(11, 'diamonds'));
    hand.addCard(new Card(12, 'diamonds'));
    hand.addCard(new Card(13, 'diamonds'));
    expect(hand.getPoints()).toEqual(30);
  });

  it('can calculate points with aces taking 11 points', function() {
    var hand = new Hand();
    hand.addCard(new Card(11, 'diamonds'));
    hand.addCard(new Card(1, 'spades'));
    expect(hand.getPoints()).toEqual(21);
  });

  it('can calculate points with aces taking 1 point', function() {
    var hand = new Hand();
    hand.addCard(new Card(11, 'diamonds'));
    hand.addCard(new Card(13, 'diamonds'));
    hand.addCard(new Card(1, 'spades'));
    expect(hand.getPoints()).toEqual(21);
  });

  it('can calculate points with aces taking 1 point', function() {
    var hand = new Hand();
    hand.addCard(new Card(1, 'spades'));
    hand.addCard(new Card(11, 'diamonds'));
    hand.addCard(new Card(13, 'diamonds'));
    expect(hand.getPoints()).toEqual(21);
  });

});

describe('Deck', function() {

  it('can instantiate', function() {
    var deck = new Deck();
    expect(deck.numCardsLeft()).toEqual(52);
  });

  it('can draw', function() {
    var deck = new Deck();
    var card = deck.draw();
    expect(deck.numCardsLeft()).toEqual(51);
    expect(card.point).toEqual(13);
    expect(card.suit).toEqual('clubs');
  });

  it('can shuffle', function() {
    var deck = new Deck();
    var firstCard = deck.cards[0];
    deck.shuffle();
    var newFirstCard = deck.cards[0];
    // expect(firstCard !== newFirstCard).toEqual(true);
    expect(firstCard).not.toEqual(newFirstCard);
  });
});
