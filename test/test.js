describe('Deck', function() {
  var $injector;
  var Deck;

  beforeEach(function() {
    $injector = angular.injector(['app']);
    Deck = $injector.get('Deck');
  })

  it('should have 52 cards', function() {
    expect(Deck.cards.length).toEqual(52);
  });

  it('should have correct card names', function() {
    expect(Deck.cards[0].name).toEqual('Ace of Hearts');
    expect(Deck.cards[15].name).toEqual('Three of Diamonds');
    expect(Deck.cards[51].name).toEqual('King of Clubs');
  })
});
