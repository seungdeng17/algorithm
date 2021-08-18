// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const answer = arr.filter((n) => !(n % divisor)).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
