// function solution(arr, m) {
//   let answer = 0;
//   const tmp = [];

//   function DFS(i) {
//     if (i >= m) {
//       console.log(tmp);
//       answer++;
//       return;
//     }
//     for (let j = 0; j < arr.length; j++) {
//       if (tmp.includes(arr[j])) continue;
//       tmp[i] = arr[j];
//       DFS(i + 1);
//       tmp.pop();
//     }
//   }
//   DFS(0);

//   return answer;
// }

function solution(arr, m) {
  let answer = 0;
  const tmp = [];
  const ch = Array.from({ length: arr.length }, () => 0);

  function DFS(i) {
    if (i >= m) {
      console.log(tmp);
      answer++;
      return;
    }
    for (let j = 0; j < arr.length; j++) {
      if (ch[j]) continue;
      tmp[i] = arr[j];
      ch[j] = 1;
      DFS(i + 1);
      ch[j] = 0;
    }
  }
  DFS(0);

  return answer;
}

console.log(solution([3, 6, 9], 2));
