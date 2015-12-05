'use strict';

function card() {
  return {
    restrict: 'E',
    templateUrl: 'templates/card.html',
    replace: true
  }
}

module.exports = card;
