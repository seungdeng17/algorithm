// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let idx = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[idx] > arr[j]) idx = j;
  }
  arr.splice(idx, 1);
  return arr.length ? arr : [-1];
}

console.log(solution([4, 3, 2, 1]));
