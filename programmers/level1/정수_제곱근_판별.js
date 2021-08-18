// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  const tmp = Math.sqrt(n);
  if (tmp === parseInt(tmp)) return (tmp + 1) ** 2;
  else return -1;
}

console.log(solution(121));
console.log(solution(3));
