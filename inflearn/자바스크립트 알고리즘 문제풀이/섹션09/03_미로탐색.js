function solution(arr) {
  let answer = 0;

  const len = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === len - 1 && y === len - 1) {
      answer++;
      return;
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
      if (arr[nx][ny] === 1) continue;
      arr[nx][ny] = 1;
      DFS(nx, ny);
      arr[nx][ny] = 0;
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
