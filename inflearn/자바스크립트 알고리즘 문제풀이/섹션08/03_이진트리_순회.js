function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    DFS(v * 2);
    DFS(v * 2 + 1);
    console.log(v);
  }
  DFS(v);
}

console.log(solution(1));
