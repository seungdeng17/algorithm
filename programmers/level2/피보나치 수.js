// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[0] = 0;
  dy[1] = 1;

  for (let i = 2; i <= n; i++) {
    dy[i] = (dy[i - 2] + dy[i - 1]) % 1234567;
  }

  return dy[n];
}

console.log(solution(1));
console.log(solution(3));
console.log(solution(5));
console.log(solution(42));
console.log(solution(100000));
