var angular = require('angular');
var ngMock = require('angular-mocks/ngMock');
var DeckCtrl = require('./controllers/DeckCtrl');
var Deck = require('./services/Deck');

var app = angular.module('app', []);

app.service('Deck', Deck);

app.controller('DeckCtrl', [ '$scope', 'Deck', DeckCtrl ]);
