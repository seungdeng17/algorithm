// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const cnt = getBinaryExcludeZero(n).length;

  while (true) {
    n++;
    const _cnt = getBinaryExcludeZero(n).length;
    if (cnt === _cnt) return n;
  }

  function getBinaryExcludeZero(n) {
    if (n === 0) return;
    if (n === 1) return String(n);
    return getBinaryExcludeZero(parseInt(n / 2)) + (n % 2 || "");
  }
}

console.log(solution(78));
