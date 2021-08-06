function solution(n, g) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  for (let [x, y] of g) graph[x][y] = 1;

  const tmp = [1];
  const ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n) {
      console.log(tmp);
      answer++;
      return;
    }
    for (let i = 2; i <= n; i++) {
      if (ch[i]) continue;
      if (graph[v][i]) {
        ch[i] = 1;
        tmp.push(i);
        DFS(i);
        ch[i] = 0;
        tmp.pop();
      }
    }
  }
  DFS(1);

  return answer;
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
