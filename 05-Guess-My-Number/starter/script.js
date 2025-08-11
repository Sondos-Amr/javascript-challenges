'use strict';

const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const num = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreNum = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

// <- RANDOM NUM >
const secritNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
secritNum(1, 20);
