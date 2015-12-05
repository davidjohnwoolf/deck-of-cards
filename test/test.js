'use strict';

describe('Deck', function() {

  var $injector = angular.injector(['app']);
  var Deck = $injector.get('Deck');

  it('should have 52 cards', function() {
    expect(Deck.cards.length).toEqual(52);
  });

  it('should have correct card names in order on creation', function() {
    expect(Deck.cards[0].id).toEqual(1);
    expect(Deck.cards[51].id).toEqual(52);
  });

  describe('Deck.shuffleCards', function() {
    it('should update card locations after shuffle', function() {
      Deck.shuffleCards();
      var updateLocations = (Deck.cards[0].id !== 1 || Deck.cards[51].id !== 52);
      expect(updateLocations).toBe(true);
    });
  });

  describe('Deck.sortCards', function() {
    it('should place cards in correct order after sort', function() {
      Deck.sortCards();
      expect(Deck.cards[0].id).toEqual(1);
      expect(Deck.cards[51].id).toEqual(52);
    });
  });

});
