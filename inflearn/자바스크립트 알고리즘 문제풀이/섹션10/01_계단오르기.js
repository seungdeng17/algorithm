// function solution(n) {
//   let answer = 0;

//   const tmp = [];
//   function DFS(L, sum) {
//     if (sum > n) return;
//     if (sum === n) {
//       console.log(tmp);
//       answer++;
//       return;
//     }
//     for (let i = 1; i <= 2; i++) {
//       tmp.push(i);
//       DFS(L + 1, sum + i);
//       tmp.pop();
//     }
//   }
//   DFS(0, 0);

//   return answer;
// }

function solution(n) {
  const dy = [];

  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n];
}

console.log(solution(4));
console.log(solution(7));
console.log(solution(45));
