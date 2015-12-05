function DecksCtrl($scope, Deck) {
  $scope.deck = Deck;

  console.log($scope.deck.cards);
}

module.exports = DecksCtrl;
