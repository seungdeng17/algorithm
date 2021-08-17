function solution(n, g) {
  let answer = 0;

  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of g) graph[a].push(b);

  const tmp = [];
  const ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n) {
      console.log(tmp);
      answer++;
      return;
    }
    for (let i = 0; i < graph[v].length; i++) {
      const _v = graph[v][i];
      if (ch[_v]) continue;
      ch[_v] = 1;
      tmp.push(_v);
      DFS(_v);
      ch[_v] = 0;
      tmp.pop();
    }
  }

  tmp.push(1);
  ch[1] = 1;
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
