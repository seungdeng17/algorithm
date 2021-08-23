// https://programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  return getBinary(n).replace(/0/g, "").length;
}

function getBinary(n) {
  if (n <= 1) return String(n);
  return getBinary(parseInt(n / 2)) + String(n % 2);
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
