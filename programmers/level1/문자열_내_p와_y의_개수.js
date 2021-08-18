// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(str) {
  const p = str.replace(/[^p]/gi, "");
  const y = str.replace(/[^y]/gi, "");
  return p.length === y.length;
}

console.log(solution("pPoooyY"));
