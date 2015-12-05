'use strict';

describe('Deck', function() {

  var DeckCtrl;
  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    DeckCtrl = $controller('DeckCtrl', {
      $scope: scope
    });
  }));

  it('should have 52 cards', function() {
    expect(scope.deck.cards.length).toEqual(52);
  });

  it('should have correct cards in correct order on creation', function() {
    expect(scope.deck.cards[0].id).toEqual(1);
    expect(scope.deck.cards[0].rank).toEqual('A');
    expect(scope.deck.cards[0].suit).toEqual('hearts');

    expect(scope.deck.cards[51].id).toEqual(52);
    expect(scope.deck.cards[51].rank).toEqual('K');
    expect(scope.deck.cards[51].suit).toEqual('clubs');
  });

  describe('shuffleCards', function() {
    it('should update card locations after shuffle', function() {
      scope.deck.shuffleCards();
      var updateLocations = (scope.deck.cards[0].id !== 1 || scope.deck.cards[51].id !== 52);
      expect(updateLocations).toBe(true);
    });
  });

  describe('sortCards', function() {
    it('should place cards in correct order after sort', function() {
      scope.deck.sortCards();
      expect(scope.deck.cards[0].id).toEqual(1);
      expect(scope.deck.cards[51].id).toEqual(52);
    });
  });

});
