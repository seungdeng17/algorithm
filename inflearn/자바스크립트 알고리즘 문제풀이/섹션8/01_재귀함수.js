// function solution(n) {
//   if (n === 1) return n;
//   return n + solution(n - 1);
// }

function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    DFS(L - 1);
    console.log(L);
  }

  DFS(n);
}

console.log(solution(3));
