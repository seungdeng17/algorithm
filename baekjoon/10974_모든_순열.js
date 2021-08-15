function solution(n) {
  const ch = Array.from({ length: n + 1 }, () => 0);
  const tmp = [];
  function DFS(L) {
    if (L === n) {
      console.log(tmp);
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (ch[i]) continue;
      ch[i] = 1;
      tmp[L] = i;
      DFS(L + 1);
      ch[i] = 0;
    }
  }
  DFS(0);
}

console.log(solution(3));
