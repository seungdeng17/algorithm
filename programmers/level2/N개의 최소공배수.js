// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  function gcd(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    if (min === 0) return max;
    else return gcd(min, max % min);
  }
  return arr.reduce((a, b) => (a * b) / gcd(a, b), 1);
}

console.log(solution([2, 6, 8, 14]));
