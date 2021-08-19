// https://programmers.co.kr/learn/courses/30/lessons/12913
// 풀이 중

function solution(arr) {
  let answer = 0;

  let tmp;
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    let idx = -1;
    for (let j = 0; j < arr[0].length; j++) {
      if (j === tmp) continue;
      if (arr[i][j] >= max) {
        max = arr[i][j];
        if (j !== tmp) idx = j;
      }
    }
    tmp = idx;
    answer += max;
  }

  return answer;
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
