function solution(n, m) {
  const tmp = [];

  function DFS(L, s) {
    if (L === m) {
      console.log(tmp);
      return;
    }
    for (let i = s; i <= n; i++) {
      tmp[L] = i;
      DFS(L + 1, i + 1);
    }
  }
  DFS(0, 1);
}

console.log(solution(4, 2));
