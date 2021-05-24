const dolphinScore1 = 97, dolphinScore2 = 112, dolphinScore3 = 101;
const kolasScore1 = 109, kolasScore2 = 95, kolasScore3 = 106;
const avgScoreDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore2) / 3;
const avgScoreKola = (kolasScore1 + kolasScore2 + kolasScore3) / 3;
if (avgScoreDolphin > avgScoreKola)
{
  if (avgScoreDolphin >= 100)
  {
    console.log(`dolphin won. It's score is ${ avgScoreDolphin } and it is greater than kola score ${ avgScoreKola }`);
  } else
  {
    console.log(`no team won as dolphin score ${ avgScoreDolphin } and kola score ${ avgScoreKola } are both less than 100`);
  }
} else if (avgScoreDolphin < avgScoreKola)
{
  if (avgScoreKola > 100)
  {
    console.log(`kola won. It's score is ${ avgScoreKola } and it is greater than dolphin score ${ avgScoreDolphin }`);
  } else
  {
    console.log(`no team won as dolphin score ${ avgScoreDolphin } and kola score ${ avgScoreKola } are both less than 100`);
  }
} else
{
  if (avgScoreDolphin > 100)
  {
    console.log(`It's a draw as both dolphin score ${ avgScoreDolphin } and kola score ${ avgScoreKola } are equal`)
  } else
  {
    console.log(`No one won as both dolphin's score ${ avgScoreDolphin } and kola's score ${ avgScoreKola } are less than 100`)
  }
}