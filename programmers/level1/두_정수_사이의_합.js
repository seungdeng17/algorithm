// https://programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let answer = 0;

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) answer += i;

  return answer;
}

console.log(solution(3, 5));
