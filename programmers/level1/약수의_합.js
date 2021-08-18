// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  if (!n) return 0;
  const tmp = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) tmp.push(i);
  return tmp.reduce((a, b) => a + b);
}

console.log(solution(144));
