function solution(arr) {
  let answer = 0;
  let endTmp = 0;
  arr.sort((a, b) => a[1] - b[1]);

  for (let [start, end] of arr) {
    if (start < endTmp) continue;
    answer++;
    endTmp = end;
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ])
);
