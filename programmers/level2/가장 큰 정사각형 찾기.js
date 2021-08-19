// https://programmers.co.kr/learn/courses/30/lessons/12905

function solution(arr) {
  const dx = [-1, -1, 0];
  const dy = [0, -1, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === 0) break;
      if (!arr[i][j] || j === 0) continue;

      let flag = true;
      let tmp = Number.MAX_SAFE_INTEGER;
      for (let k = 0; k < dx.length; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx < 0 || ny < 0) continue;
        if (!arr[nx][ny]) flag = false;
        else tmp = Math.min(tmp, arr[nx][ny]);
      }
      if (flag) arr[i][j] = ++tmp;
    }
  }

  return (
    arr.reduce((acc, arr) => {
      const max = Math.max(...arr);
      if (max > acc) acc = max;
      return acc;
    }, 0) ** 2
  );
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
