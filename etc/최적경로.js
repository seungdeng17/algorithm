function solution(arr, target) {
  let answer = Number.MAX_SAFE_INTEGER;

  const graph = Array.from({ length: target + 1 }, () => []);
  for (let [start, end, money] of arr) {
    graph[start].push([end, money]);
    graph[end].push([start, money]);
  }

  const ch = [];
  const tmp = [];
  function DFS(N, sum) {
    if (sum >= answer) return;
    if (N === target) {
      console.log(tmp, sum);
      answer = Math.min(answer, sum);
      return;
    }
    for (let i = 0; i < graph[N].length; i++) {
      const nextNode = graph[N][i][0];
      if (N === nextNode || ch[nextNode]) continue;
      const money = graph[N][i][1];
      ch[nextNode] = 1;
      tmp.push(nextNode);
      DFS(nextNode, sum + money);
      ch[nextNode] = 0;
      tmp.pop();
    }
  }
  ch[1] = 1;
  tmp.push(1);
  DFS(1, 0);

  return answer;
}

console.log(
  solution(
    [
      [1, 2, 100],
      [1, 3, 200],
      [2, 3, 70],
      [2, 4, 50],
      [3, 4, 100],
      [3, 5, 300],
      [4, 5, 90],
      [4, 6, 160],
      [5, 6, 60],
    ],
    6
  )
);
