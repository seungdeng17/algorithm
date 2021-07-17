// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const tri = getTrinary(n);
  return getInteger(tri, 3);
}

function getTrinary(n) {
  if (n === 0 || n === 1 || n === 2) return String(n);
  return getTrinary(Math.floor(n / 3)) + String(n % 3);
}

function getInteger(tri, n) {
  return tri.split("").reduce((answer, num, i) => answer + num * n ** i, 0);
}
