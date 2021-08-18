// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(n) {
  let cnt = 0;
  function DFS(n) {
    if (cnt === 500 || n === 1) return;
    cnt++;
    if (n % 2 === 0) DFS(n / 2);
    else DFS(n * 3 + 1);
  }
  DFS(n);

  return cnt === 500 ? -1 : cnt;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
