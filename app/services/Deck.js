function Deck() {

  var suits = ['Hearts','Diamonds','Spades','Clubs'];
	var ranks = ['Ace','Two','Three','Four','Five','Six','Seven', 'Eight','Nine','Ten','Jack','Queen','King'];

  // individual card constructor
  function Card(id, rank, suit, name) {
    return {
      id: id,
      rank: rank,
      suit: suit,
      name: name
    }
  }

  this.cards = [];

  // add cards to deck
  for (var i = 0; i < 13; i++) {
    this.cards.push(Card(i + 1, ranks[i], suits[0], ranks[i] + ' of ' + suits[0]));
    this.cards.push(Card(i + 14, ranks[i], suits[1], ranks[i] + ' of ' + suits[1]));
    this.cards.push(Card(i + 27, ranks[i], suits[2], ranks[i] + ' of ' + suits[2]));
    this.cards.push(Card(i + 40, ranks[i], suits[3], ranks[i] + ' of ' + suits[3]));
  }

  this.sort = function() {
    this.cards.sort(function(a, b) {
      return a.id - b.id
    });
  };

  this.sort();
}

module.exports = Deck;
