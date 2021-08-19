// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    const max = Math.max(...arr[i - 1]);
    const idx = arr[i - 1].indexOf(max);

    for (let j = 0; j < arr[0].length; j++) {
      if (idx !== j) arr[i][j] += max;
      else {
        const _arr = arr[i - 1].slice();
        _arr.splice(idx, 1);
        arr[i][j] += Math.max(..._arr);
      }
    }
  }

  return Math.max(...arr[arr.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
);
