// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

console.log(solution([1, 2, 3, 4]));
