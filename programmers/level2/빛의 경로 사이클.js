// https://programmers.co.kr/learn/courses/30/lessons/86052
// 풀이중

function solution(grid) {
  const answer = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const board = Array.from({ length: grid.length }, (_, i) =>
    grid[i].split("")
  );
  const ch = Array.from({ length: grid.length }, () => []);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) ch[i].push([0, 0, 0, 0]);
  }

  for (let d = 0; d < dx.length; d++) {
    const cnt = DFS(0, 0, d, 0);
    if (cnt) answer.push(cnt);
  }
  // console.log(DFS(0, 0, 1, 0));

  function DFS(x, y, d, cnt) {
    if (ch[x][y][d]) return cnt;
    ch[x][y][d] = 1;

    let nx = x + dx[d];
    let ny = y + dy[d];
    if (nx < 0) nx = board.length - 1;
    if (nx >= board.length) nx = 0;
    if (ny < 0) ny = board[0].length - 1;
    if (ny >= board[0].length) ny = 0;

    const nd = getNextDir(board[nx][ny], d);
    // console.log(`(${x}, ${y}) -> (${nx}, ${ny}) / ${d}`);
    return DFS(nx, ny, nd, cnt + 1);
  }

  return answer.sort((a, b) => a - b);
}

function getNextDir(b, dir) {
  if (b === "S") return dir;

  let d;
  if (b === "L") {
    d = {
      0: 2,
      1: 3,
      2: 1,
      3: 0,
    };
  }
  if (b === "R") {
    d = {
      0: 3,
      1: 2,
      2: 0,
      3: 1,
    };
  }
  return d[dir];
}

console.log(solution(["SL", "LR"]));
console.log(solution(["S"]));
console.log(solution(["R", "R"]));
