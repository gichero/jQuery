describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
    var card = new Card(8, 'clubs');
    expect(card.point).toEqual(8);
    expect(card.suit).toEqual('clubs');
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

describe('Hand', function(){
  it('should instantiate a new Hand', function(){
    var hand = new Hand();
  });

  it('should add new card',function(){
    var myHand = new Hand();
    expect(myHand.addCard(new Card(5, 'diamonds')));
    myHand.addCard(new Card(13, 'spades'));
  });


  it('should return total points', function() {
    var myHand = new Hand();
    myHand.addCard(new Card(5,'diamonds'));
    myHand.addCard(new Card(13, 'spades'));
    expect(myHand.cards.length).toEqual(2);
    expect(myHand.getPoints()).toEqual(15);
  });

  it('should return total points', function() {
    var myHand = new Hand();
    myHand.addCard(new Card(11,'diamonds'));
    myHand.addCard(new Card(12, 'spades'));
    expect(myHand.cards.length).toEqual(2);
    expect(myHand.getPoints()).toEqual(20);
  });

  it('can calculate the ace getting a value of 1',function(){

  });


});

describe('Deck', function(){
    it('should instantiate a new Deck', function(){
        var myDeck = new Deck();


    });




});
