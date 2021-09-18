// https://programmers.co.kr/learn/courses/30/lessons/77485

function solution(rows, columns, queries) {
  const answer = [];

  const board = Array.from({ length: rows }, () => []);
  for (let i = 0; i < rows * columns; i++) {
    board[Math.floor(i / columns)].push(i + 1);
  }

  let dir = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (const query of queries) {
    const [x1, y1, x2, y2] = query.map((n) => n - 1);
    const queue = [];
    let tmp1 = board[x1][y1];
    let min = tmp1;
    queue.push([x1, y1]);
    while (true) {
      const [x, y] = queue.shift();

      if (
        (dir === 0 && y === y2) ||
        (dir === 1 && x === x2) ||
        (dir === 2 && y === y1)
      ) {
        dir++;
      }
      if (dir === 3 && x === x1) break;

      const nx = x + dx[dir];
      const ny = y + dy[dir];

      let tmp2 = board[nx][ny];
      min = Math.min(min, tmp2);
      board[nx][ny] = tmp1;
      tmp1 = tmp2;
      queue.push([nx, ny]);
    }
    dir = 0;
    answer.push(min);
  }

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
console.log(solution(100, 97, [[1, 1, 100, 97]]));
