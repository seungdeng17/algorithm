// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  function getStrange(n) {
    if (n < 3) return String(n);
    return (
      getStrange(n % 3 ? parseInt(n / 3) : n / 3 - 1) +
      String(n % 3 ? n % 3 : 4)
    );
  }
  return String(+getStrange(n));
}

console.log(solution(6));
