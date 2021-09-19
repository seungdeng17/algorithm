// https://programmers.co.kr/learn/courses/30/lessons/86052

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
        const cnt = checker(i, j, d);
        if (cnt) answer.push(cnt);
      }
    }
  }

  function checker(x, y, d) {
    let cnt = 0;

    while (true) {
      if (ch[x][y][d]) break;
      ch[x][y][d] = 1;
      cnt++;

      x = x + dx[d];
      y = y + dy[d];
      if (x < 0) x = grid.length - 1;
      if (x >= grid.length) x = 0;
      if (y < 0) y = grid[0].length - 1;
      if (y >= grid[0].length) y = 0;

      d = getNextDir(grid[x][y], d);
    }

    return cnt;
  }

  return answer.sort((a, b) => a - b);
}

function getNextDir(block, dir) {
  if (block === "S") return dir;

  let nd;
  if (block === "L") nd = [2, 3, 1, 0];
  if (block === "R") nd = [3, 2, 0, 1];
  return nd[dir];
}

// function checker(x, y, d) {
//   let cnt = 0;

//   function DFS(x, y, d) {
//     if (ch[x][y][d]) return;
//     ch[x][y][d] = 1;
//     cnt++;

//     x = x + dx[d];
//     y = y + dy[d];
//     if (x < 0) x = grid.length - 1;
//     if (x >= grid.length) x = 0;
//     if (y < 0) y = grid[0].length - 1;
//     if (y >= grid[0].length) y = 0;

//     d = getNextDir(grid[x][y], d);
//     DFS(x, y, d);
//   }
//   DFS(x, y, d);

//   return cnt;
// }

console.log(solution(["SL", "LR"]));
console.log(solution(["S"]));
console.log(solution(["R", "R"]));
