// https://programmers.co.kr/learn/courses/30/lessons/12978

// function solution(N, road, K) {
//   const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
//   for (let [start, end, score] of road) {
//     if (graph[start][end] && score > graph[start][end]) continue;
//     graph[start][end] = score;
//     graph[end][start] = score;
//   }

//   const ch = [];
//   const set = new Set();
//   function DFS(node, sum) {
//     if (sum > K) return;
//     if (sum <= K) set.add(node);
//     for (let i = 1; i < graph[0].length; i++) {
//       if (i === node || ch[i] || !graph[node][i]) continue;
//       ch[i] = 1;
//       DFS(i, sum + graph[node][i]);
//       ch[i] = 0;
//     }
//   }
//   ch[1] = 1;
//   DFS(1, 0);

//   return set.size;
// }

function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let [start, end, score] of road) {
    graph[start].push([end, score]);
    graph[end].push([start, score]);
  }

  const ch = [];
  const set = new Set();
  function DFS(node, sum) {
    if (sum > K) return;
    if (sum <= K) set.add(node);
    for (let i = 0; i < graph[node].length; i++) {
      const [end, score] = graph[node][i];
      if (end === node || ch[end]) continue;
      ch[end] = 1;
      DFS(end, sum + score);
      ch[end] = 0;
    }
  }
  ch[1] = 1;
  DFS(1, 0);

  return set.size;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
