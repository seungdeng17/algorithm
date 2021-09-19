// https://programmers.co.kr/learn/courses/30/lessons/86052
// 풀이중

function solution(grid) {
  const answer = [];

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const ch = Array.from({ length: grid.length }, () => []);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) ch[i].push([0, 0, 0, 0]);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      for (let d = 0; d < dx.length; d++) {
        if (ch[i][j][d]) continue;
        const cnt = DFS(i, j, d, 0);
        if (cnt) answer.push(cnt);
      }
    }
  }

  function DFS(x, y, d, cnt) {
    if (ch[x][y][d]) return cnt;
    ch[x][y][d] = 1;

    let nx = x + dx[d];
    let ny = y + dy[d];
    if (nx < 0) nx = grid.length - 1;
    if (nx >= grid.length) nx = 0;
    if (ny < 0) ny = grid[0].length - 1;
    if (ny >= grid[0].length) ny = 0;

    const nd = getNextDir(grid[nx][ny], d);
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
