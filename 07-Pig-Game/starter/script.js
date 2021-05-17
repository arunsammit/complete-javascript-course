'use strict';

//selecting elements
const scoreEl = [document.getElementById('score--0'), document.getElementById('score--1')];
const current = [document.getElementById(`current--0`), document.getElementById(`current--1`)];
const playersEl = [document.querySelector(`.player--0`), document.querySelector(`.player--1`)]
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//variables
let scores, currentPlayer, currentRollScore, gameOver;

const nextPlayer = function () {
  current[currentPlayer].textContent = currentRollScore = 0;
  playersEl[currentPlayer].classList.remove('player--active');
  currentPlayer = (currentPlayer + 1) % 2;
  playersEl[currentPlayer].classList.add('player--active');
}

//initializing 
const init = function () {
  gameOver = false;
  scores = [0, 0];
  scoreEl[0].textContent = scores[0];
  scoreEl[1].textContent = scores[1];
  current[0].textContent = 0;
  current[0].textContent = 0;
  diceEl.classList.add('hidden');
  currentPlayer = 0;
  currentRollScore = 0;
  playersEl[0].classList.remove('player--winner');
  playersEl[0].classList.add('player--active');
  playersEl[1].classList.remove('player--active', 'player--winner');
}

const rollDiceAction = function () {
  if (gameOver) return;
  let diceRollVal = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${ diceRollVal }.png`);
  if (diceRollVal === 1) {
    nextPlayer();
    return;
  }
  current[currentPlayer].textContent = currentRollScore += diceRollVal;
}
const holdAction = function () {
  if (gameOver) return;
  scoreEl[currentPlayer].textContent = scores[currentPlayer] += currentRollScore;
  if (scores[currentPlayer] >= 100) {
    playersEl[currentPlayer].classList.remove('player--active');
    playersEl[currentPlayer].classList.add('player--winner');
    diceEl.classList.add('hidden');
    gameOver = true;
    return;
  }
  nextPlayer();
}
btnRoll.addEventListener('click', rollDiceAction);
btnHold.addEventListener('click', holdAction);
btnNew.addEventListener('click', init);
init();



