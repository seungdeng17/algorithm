// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(str) {
  const tmp = str.split(" ");
  const min = Math.min(...tmp);
  const max = Math.max(...tmp);
  return [min, max].join(" ");
}

console.log(solution("1 2 3 4"));
