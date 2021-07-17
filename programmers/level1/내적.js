// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  return a.map((n, i) => n * b[i]).reduce((acc, curr) => acc + curr);
}
