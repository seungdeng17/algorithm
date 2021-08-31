// https://programmers.co.kr/learn/courses/30/lessons/1844
// 풀이중

function solution(arr) {
  let answer = -1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, cnt) {
    if (answer !== -1 && cnt >= answer) return;
    if (x === arr.length - 1 && y === arr[0].length - 1) {
      if (answer === -1) answer = cnt;
      else answer = Math.min(answer, cnt);
      return;
    }

    for (let k = 0; k < dx.length; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr[0].length) continue;
      if (!arr[nx][ny]) continue;
      arr[nx][ny] = 0;
      DFS(nx, ny, cnt + 1);
      arr[nx][ny] = 1;
    }
  }
  DFS(0, 0, 1);

  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
