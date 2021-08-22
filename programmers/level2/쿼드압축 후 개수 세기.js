// https://programmers.co.kr/learn/courses/30/lessons/68936

function solution(arr) {
  let zeroCnt = 0;
  let oneCnt = 0;

  function DFS(start, end) {
    let n = -1;
    let flag = true;
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        if (n === -1) n = arr[i][j];
        else if (n !== arr[i][j]) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    if (flag) {
      if (n === 0) zeroCnt++;
      if (n === 1) oneCnt++;
      return;
    }

    const hX = Math.floor((start[0] + end[0]) / 2);
    const hY = Math.floor((start[1] + end[1]) / 2);
    DFS(start, [hX, hY]);
    DFS([start[0], hY + 1], [hX, end[1]]);
    DFS([hX + 1, start[1]], [end[0], hY]);
    DFS([hX + 1, hY + 1], end);
  }
  DFS([0, 0], [arr.length - 1, arr.length - 1]);

  return [zeroCnt, oneCnt];
}

console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 1],
    [1, 0],
  ])
);
console.log(solution([[1]]));
