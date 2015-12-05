function DeckCtrl($scope, Deck) {
  $scope.deck = Deck;

  console.log($scope.deck.cards);
}

module.exports = DeckCtrl;
