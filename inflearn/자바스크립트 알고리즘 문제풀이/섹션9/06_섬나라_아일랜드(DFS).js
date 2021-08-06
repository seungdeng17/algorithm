function solution(arr) {
  let answer = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[i][j]) continue;
      DFS(i, j);
      answer++;
    }
  }

  function DFS(x, y) {
    arr[x][y] = 0;
    for (let k = 0; k < dx.length; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr.length) continue;
      if (arr[nx][ny]) DFS(nx, ny);
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
