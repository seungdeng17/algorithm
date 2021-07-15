// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const rankMap = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let matchCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (!lottos[i]) {
      zeroCount++;
      continue;
    }
    if (win_nums.includes(lottos[i])) matchCount++;
  }

  const highRank =
    rankMap[matchCount + zeroCount > 6 ? 6 : matchCount + zeroCount];
  const lowRank = rankMap[matchCount];

  return [highRank, lowRank];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
