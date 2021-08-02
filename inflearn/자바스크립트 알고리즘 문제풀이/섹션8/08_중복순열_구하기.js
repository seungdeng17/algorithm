function solution(n, m) {
  let tmp = [];
  function DFS(i) {
    if (i >= m) {
      console.log(tmp);
      return;
    }
    for (let j = 1; j <= n; j++) {
      tmp[i] = j;
      DFS(i + 1);
    }
  }
  DFS(0);
}

console.log(solution(3, 2));
