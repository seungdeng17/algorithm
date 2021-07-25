// function solution(arr) {
//   let answer = "NO";
//   const check = Array.from({ length: arr.length }, () => 0);

//   function DFS(v) {
//     if (v >= arr.length || answer === "YES") {
//       let s1 = 0;
//       let s2 = 0;
//       for (let i = 0; i < check.length; i++) {
//         if (check[i]) s1 += arr[i];
//         else s2 += arr[i];
//       }
//       if (s1 === s2) answer = "YES";
//       return;
//     }
//     check[v] = 1;
//     DFS(v + 1);
//     check[v] = 0;
//     DFS(v + 1);
//   }
//   DFS(0);

//   return answer;
// }

function solution(arr) {
  let answer = "NO";
  const total = arr.reduce((a, b) => a + b);

  let flag = false;
  function DFS(i, sum) {
    if (flag) return;
    if (i >= arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = true;
      }
      return;
    }
    DFS(i + 1, sum + arr[i]);
    DFS(i + 1, sum);
  }
  DFS(0, 0);

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
