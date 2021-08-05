// function solution(n, f) {
//   let answer;

//   const b = [];
//   const metrix = Array.from({ length: n }, () => Array(n).fill(0));

//   function combi(n, r) {
//     if (metrix[n][r]) return metrix[n][r];
//     if (r === 0 || n === r) return 1;
//     return (metrix[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }
//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i);
//   }

//   const arr = Array.from({ length: n }, (_, i) => i + 1);
//   const ch = Array.from({ length: n }, () => 0);
//   const tmp = [];
//   let flag = false;

//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n) {
//       if (sum === f) {
//         answer = [...tmp];
//         flag = true;
//       }
//       return;
//     }
//     for (let i = 0; i < n; i++) {
//       if (ch[i]) continue;
//       ch[i] = 1;
//       tmp[L] = arr[i];
//       DFS(L + 1, sum + tmp[L] * b[L]);
//       ch[i] = 0;
//     }
//   }
//   DFS(0, 0);

//   return answer;
// }

function solution(n, f) {
  let answer;

  const b = [];
  const metrix = Array.from({ length: n }, () => Array(n).fill(0));

  function combi(n, r) {
    if (metrix[n][r]) return metrix[n][r];
    if (n === r || r === 0) return 1;
    return (metrix[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const ch = Array.from({ length: n }, () => 0);
  const tmp = [];
  let flag = false;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (sum === f) {
        answer = [...tmp];
        flag = true;
      }
      return;
    }
    for (let i = 0; i < n; i++) {
      if (ch[i]) continue;
      ch[i] = 1;
      tmp[L] = arr[i];
      DFS(L + 1, sum + tmp[L] * b[L]);
      ch[i] = 0;
    }
  }
  DFS(0, 0);

  return answer;
}

console.log(solution(4, 16));
