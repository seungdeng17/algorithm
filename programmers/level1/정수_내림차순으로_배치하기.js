// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  return +(n + "")
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

console.log(solution(118372));
