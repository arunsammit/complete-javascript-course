'use strict';
const getRandomIntInclusive = function (min, max) {
  // borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
/**
 * initialization of game parameters
 */
let highScore = 0;
const maxScore = 20;
let currentScore = maxScore;
let correctGuessNumber = getRandomIntInclusive(1, 20);
document.querySelector('.score').textContent = currentScore;
document.querySelector('.highscore').textContent = highScore;


document.querySelector('.again').addEventListener('click', function () {
  currentScore = maxScore;
  document.querySelector('.score').textContent = currentScore;
  correctGuessNumber = getRandomIntInclusive(1, 20);
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = "";
})
document.querySelector('.check').addEventListener('click',
  function () {
    let input;
    if (currentScore < 1) return;
    input = document.querySelector('.guess').value;
    if (input === "") {
      document.querySelector('.message').textContent = "⛔️ No number!"
    } else {
      input = Number(input);
      if (input === correctGuessNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('body').style.backgroundColor = 'rgb(96, 179, 71)'
        document.querySelector('.number').textContent = correctGuessNumber;
        document.querySelector('.number').style.width = '30rem';
        if (currentScore > highScore) {
          highScore = currentScore;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else {
        document.querySelector('.score').textContent = --currentScore;
        if (currentScore < 1) {
          document.querySelector('.message').textContent = '💥 You lost the game!';
        } else {
          document.querySelector('.message').textContent = input < correctGuessNumber ? '📉 Too low!' : '📈 Too high!';
        }
      }
    }

  })