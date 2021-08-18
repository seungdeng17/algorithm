// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const sum = (x + "").split("").reduce((a, b) => a + +b, 0);
  return !(x % sum);
}

console.log(solution(10));
console.log(solution(11));
