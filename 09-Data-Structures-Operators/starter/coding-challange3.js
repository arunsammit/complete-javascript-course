const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
//task 1
const eventsArr = [...new Set(gameEvents.values())];
console.log(eventsArr);
//task 2
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);
//task 3
console.log(`An event happened, on average, every ${ 90 / gameEvents.size } minutes`);
//task 4
for (const [time, event] of gameEvents) {
  const half = time <= 45 ? 'FIRST HALF' : 'SECOND HALF';
  console.log(`[${ half }] ${ time }: ${ event }`);
}
