// function solution(arr, money) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   let tmp = [];
//   function DFS(L, sum) {
//     if (sum > money || L >= answer) return;
//     if (sum === money) {
//       console.log(tmp);
//       answer = Math.min(answer, L);
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       tmp.push(arr[i]);
//       DFS(L + 1, sum + arr[i]);
//       tmp.pop();
//     }
//   }
//   DFS(0, 0);

//   return answer;
// }

function solution(arr, money) {
  const dy = Array.from({ length: money + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    const coin = arr[i];
    for (let j = coin; j <= money; j++) {
      const curr = dy[j - coin] + 1;
      if (dy[j] > curr) dy[j] = curr;
    }
  }

  console.log(dy);
  return dy[money];
}

console.log(solution([1, 2, 5], 15));
