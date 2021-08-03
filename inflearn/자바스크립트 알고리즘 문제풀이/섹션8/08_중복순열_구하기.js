// function solution(n, m) {
//   const tmp = [];
//   function DFS(i) {
//     if (i >= m) {
//       console.log(tmp);
//       return;
//     }
//     for (let j = 1; j <= n; j++) {
//       tmp[i] = j;
//       DFS(i + 1);
//     }
//   }
//   DFS(0);
// }

function solution(n, m) {
  let answer = 0;
  const tmp = [];

  function DFS(L) {
    if (L >= m) {
      console.log(tmp);
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      tmp[L] = i;
      DFS(L + 1);
    }
  }
  DFS(0);

  return answer;
}

console.log(solution(3, 2));
