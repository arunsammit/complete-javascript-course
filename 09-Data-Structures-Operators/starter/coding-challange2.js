'use strict'
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//task 1
for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${ idx }: ${ player }`);
}
//task 2
function calcAvgOdd(odds) {
  let avg_odd = 0;
  const oddsArray = Object.entries(odds);
  for (const [, odd] of oddsArray) {
    avg_odd += odd;
  }
  avg_odd /= oddsArray.length;
  return avg_odd;
}
//task 3
function printOdds(game) {
  for (const [team, odd] of Object.entries(game.odds)) {
    const name = game[team] ?? `draw`;
    const formattedStr = `Odd of ` + (name === `draw` ? `draw:` : `victory ${ name }`) + `: ${ odd }`;
    console.log(formattedStr);
  }
}
//task 4
function getScorers(scored) {
  const scorers = {};
  for (const player of scored) {
    const x = scorers[player];
    (scorers[player]++, x) ?? (scorers[player] = 1);
  }
  return scorers;
}
const avgOdd = calcAvgOdd(game.odds);
console.log(avgOdd);
printOdds(game);
const scorers = getScorers(game.scored);
console.log(scorers);
