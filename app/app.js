'use strict';

var angular = require('angular');
var ngMock = require('angular-mocks/ngMock');

var app = angular.module('app', []);

app.service('Deck', require('./services/Deck'));

app.controller('DeckCtrl', [ '$scope', 'Deck', require('./controllers/DeckCtrl') ]);

app.directive('card', require('./directives/card'));
