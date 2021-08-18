// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}

console.log(solution(["sun", "bed", "car"], 1));
