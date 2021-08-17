function solution(arr) {
  let answer = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const queue = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[i][j]) continue;

      arr[i][j] = 0;
      queue.push([i, j]);
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < dx.length; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr.length) continue;
          if (arr[nx][ny]) {
            arr[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
      answer++;
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
