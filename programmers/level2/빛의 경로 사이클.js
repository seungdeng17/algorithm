// https://programmers.co.kr/learn/courses/30/lessons/86052

function solution(grid) {
  const answer = [];

  // 빛의 다음 방향 좌표 계산을 위한 데이터
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 방문한 방향을 체크할 체크 배열
  const ch = Array.from({ length: grid.length }, () => []).map((c) => {
    for (let i = 0; i < grid[0].length; i++) c.push([0, 0, 0, 0]); // 상하좌우
    return c;
  });

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      for (let d = 0; d < dx.length; d++) {
        if (ch[x][y][d]) continue;
        const cnt = getCycleCnt(x, y, d); // 사이클 카운트 구하기
        if (cnt) answer.push(cnt);
      }
    }
  }

  function getCycleCnt(x, y, d) {
    let cnt = 0;
    while (true) {
      if (ch[x][y][d]) break; // 이미 방문한 방향일 때 break
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
  // 0상, 1하, 2좌, 3우
  if (block === "S") return dir;
  if (block === "L") return [2, 3, 1, 0][dir];
  if (block === "R") return [3, 2, 0, 1][dir];
}

console.log(solution(["SL", "LR"]));
console.log(solution(["S"]));
console.log(solution(["R", "R"]));
