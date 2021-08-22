// https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let answer = 0;

  const chMap = new Map();
  const nd = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  function DFS(L, startPos) {
    if (L === dirs.length) return;
    const cmd = dirs[L];
    const [sX, sY] = startPos;
    let nX = sX + nd[cmd][0];
    let nY = sY + nd[cmd][1];
    [nX, nY] = checkNextPos(nX, nY);

    if (!(sX === nX && sY === nY)) {
      const _chS = chMap.get(`${sX},${sY}`);
      let flag = true;
      if (_chS) {
        for (let [x, y] of _chS) if (x === nX && y === nY) flag = false;
      } else {
        chMap.set(`${sX},${sY}`, []);
      }
      if (flag) {
        answer++;
        chMap.get(`${sX},${sY}`).push([nX, nY]);

        const _chN = chMap.get(`${nX},${nY}`);
        if (_chN) _chN.push([sX, sY]);
        else chMap.set(`${nX},${nY}`, [[sX, sY]]);
      }
    }
    DFS(L + 1, [nX, nY]);
  }
  DFS(0, [0, 0]);

  return answer;
}

function checkNextPos(nX, nY) {
  const pos = [nX, nY];
  if (pos[0] > 5) pos[0] = 5;
  if (pos[0] < -5) pos[0] = -5;
  if (pos[1] > 5) pos[1] = 5;
  if (pos[1] < -5) pos[1] = -5;
  return pos;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
console.log(solution("UDUDUDUD"));
