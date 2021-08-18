// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer[i] = x * (i + 1);
  }

  return answer;
}

console.log(solution(2, 5));
