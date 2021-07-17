// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, n) => {
      budget -= n;
      if (budget >= 0) count++;
      return count;
    }, 0);
}
