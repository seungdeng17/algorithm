// https://programmers.co.kr/learn/courses/30/lessons/85002

function solution(weights, head2head) {
  const scores = [];

  for (let i = 0; i < head2head.length; i++) {
    const myWeight = weights[i];
    const record = head2head[i].split("");
    let win = 0;
    let wWin = 0;
    let round = 0;

    for (let j = 0; j < record.length; j++) {
      if (i === j || record[j] === "N") continue;
      round++;
      if (record[j] === "W") {
        if (weights[j] > myWeight) wWin++;
        win++;
      }
    }
    scores[i] = [i + 1, round ? (win / round) * 100 : 0, wWin, myWeight];
  }

  return scores
    .sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      if (a[2] !== b[2]) return b[2] - a[2];
      if (a[3] !== b[3]) return b[3] - a[3];
      return a[0] - b[0];
    })
    .map(([n]) => n);
}

console.log(solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"]));
console.log(solution([145, 92, 86], ["NLW", "WNL", "LWN"]));
console.log(solution([60, 70, 60], ["NNN", "NNN", "NNN"]));
