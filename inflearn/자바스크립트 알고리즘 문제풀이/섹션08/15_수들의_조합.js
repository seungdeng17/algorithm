// function solution(arr, k, m) {
//   let answer = [];
//   const tmp = [];

//   function DFS(L, s, sum) {
//     if (L === k) {
//       if (sum % m === 0) answer.push([...tmp]);
//       return;
//     }
//     for (let i = s; i < arr.length; i++) {
//       tmp[L] = arr[i];
//       DFS(L + 1, i + 1, sum + arr[i]);
//     }
//   }
//   DFS(0, 0, 0);

//   return answer;
// }

function solution(arr, k, m) {
  const tmp = [];

  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) {
        console.log([...tmp]);
      }
      return;
    }
    for (let i = s; i < arr.length; i++) {
      tmp[L] = arr[i];
      DFS(L + 1, i + 1, sum + arr[i]);
    }
  }
  DFS(0, 0, 0);
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
