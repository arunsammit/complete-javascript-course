'use strict'
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// console.log();
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', function () {
  const str = textarea.value;
  // console.log(str);
  const sentences = str.split('\n');
  for (const [num, sentence] of sentences.entries()) {
    const words = sentence.split('_');
    for (const [i, word] of words.entries()) {
      if (i == 0) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    }
    let reqStr = words.join('').padEnd(25, ' ');
    reqStr += '✅'.repeat(num + 1);
    console.log(reqStr);
  }
})
/*
Umm_yOu_KNow
thEy_sAy_All_kinDs
oF_meAN_tHiNgs_Well
*/