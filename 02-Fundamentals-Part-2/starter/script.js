"use strict";
const calcAvg = (x1, x2, x3) => (x1 + x2 + x3) / 3;
function checkWinner(avgDolphinScore, avgKolaScore) {
  const winner = avgDolphinScore >= 2 * avgKolaScore ? "dolphin" : (avgKolaScore >= 2 * avgDolphinScore ? "kola" : "no one")
  console.log(`winner is ${ winner }`)
}
// let kolaScore1 = 65, kolaScore2 = 54, kolaScore3 = 49;
// let dolphinScore1 = 44, dolphinScore2 = 23, dolphinScore3 = 71;
let kolaScore1 = 23, kolaScore2 = 24, kolaScore3 = 27;
let dolphinScore1 = 85, dolphinScore2 = 54, dolphinScore3 = 41;
const avgDolphinScore = calcAvg(dolphinScore1, dolphinScore2, dolphinScore3);
const avgKolaScore = calcAvg(kolaScore1, kolaScore2, kolaScore3);
checkWinner(avgDolphinScore, avgKolaScore);
