// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return (n + "").split("").reduce((a, b) => a + +b, 0);
}

console.log(solution(123));
