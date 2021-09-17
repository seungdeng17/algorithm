// https://programmers.co.kr/learn/courses/30/lessons/1844

function solution(arr) {
  const col = arr.length - 1;
  const row = arr[0].length - 1;
  arr[col][row] = -1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];
  queue.push([0, 0]);
  while (queue.length) {
    const [x, y] = queue.shift();
    const cnt = arr[x][y];
    if (x === col && y === row) return arr[col][row];
    for (let k = 0; k < dx.length; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr[0].length) continue;
      if (!arr[nx][ny] || arr[nx][ny] > 1) continue;
      arr[nx][ny] = cnt + 1;
      queue.push([nx, ny]);
    }
    arr[x][y] = 0;
  }

  return -1;
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
