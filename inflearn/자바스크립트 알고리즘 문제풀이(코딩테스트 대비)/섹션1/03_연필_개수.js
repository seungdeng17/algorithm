function solution(n) {
  return n % 12 ? Math.floor(n / 12) + 1 : 0;
}

console.log(solution(178));
