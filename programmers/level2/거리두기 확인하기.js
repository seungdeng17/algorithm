// https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

function solution(places) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  return places.map((place) => {
    const len = place.length;
    const tmp = Array.from({ length: len }, () => Array(len).fill(0));

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const p = place[i][j];
        if (p === "O") continue;
        if (p === "X") {
          tmp[i][j] += 10;
          continue;
        }
        tmp[i][j]--;
        for (let k = 0; k < dx.length; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
          tmp[nx][ny]--;
        }
      }
    }

    let flag = true;
    for (const r of tmp) {
      if (!flag) break;
      for (const n of r) {
        if (n <= -2) {
          flag = false;
          break;
        }
      }
    }
    return +flag;
  });
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
