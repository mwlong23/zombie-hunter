(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = exports.Card = function Card(row, column, random) {
  _classCallCheck(this, Card);

  this.isZombie = false;
  //this.imageNumber = image;
  this.shot = false;
  this.row = row;
  this.column = column;
  this.random = random;
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameBoard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _card = require("./../js/card.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameBoard = exports.GameBoard = function () {
  function GameBoard(rows, columns) {
    _classCallCheck(this, GameBoard);

    this.cards = [];
    this.rows = rows;
    this.columns = columns;
    var zombies = Math.floor(rows * columns / 4);

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        var random = Math.random();
        this.cards.push(new _card.Card(i, j, random));
      }
    }
    this.cards.sort(function (a, b) {
      return b.random - a.random;
    });
    for (var _i = 0; _i < zombies; _i++) {
      console.log("$$$$$$$$$$$$ i =: " + _i);
      this.cards[_i].isZombie = true;
    }
  }

  _createClass(GameBoard, [{
    key: "sort",
    value: function sort() {
      var that = this;
      this.cards.sort(function (a, b) {
        return a.row * that.columns + a.column - (b.row * that.columns + b.column);
      });
    }
  }]);

  return GameBoard;
}();

},{"./../js/card.js":1}],3:[function(require,module,exports){
'use strict';

var _gameBoard = require('./../js/game-board.js');

$(document).ready(function () {
  $('.btn').click(function (e) {
    e.preventDefault();
    console.log("hello");
    var board = new _gameBoard.GameBoard(3, 6);
    board.cards.forEach(function (card) {
      var position = "#row" + (card.row + 1) + "-column" + (card.column + 1);
      if (card.isZombie) {
        $(position + " .infected").show();
        console.log("show: " + position + " .infected");
        $(position + " .healthy").hide();
        console.log("hide: " + position + " .healthy");
      } else {
        $(position + " .infected").hide();
        console.log("hide: " + position + " .infected");
        $(position + " .healthy").show();
        console.log("show: " + position + " .healthy");
      }
    });
  });
}); //import { Card } from './../js/card.js';

},{"./../js/game-board.js":2}]},{},[3]);
