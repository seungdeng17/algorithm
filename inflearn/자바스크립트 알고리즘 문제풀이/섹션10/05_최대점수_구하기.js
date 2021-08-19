// // function solution(limit, arr) {
// //   let answer = 0;

// //   function DFS(L, score, time) {
// //     if (time > limit) return;
// //     if (L === arr.length) {
// //       answer = Math.max(answer, score);
// //       return;
// //     }
// //     DFS(L + 1, score + arr[L][0], time + arr[L][1]);
// //     DFS(L + 1, score, time);
// //   }
// //   DFS(0, 0, 0);

// //   return answer;
// // }

// function solution(limit, arr) {
//   const dy = Array.from({ length: limit + 1 }, () => 0);

//   for (let i = 0; i < arr.length; i++) {
//     const [score, time] = arr[i];
//     for (let j = limit; j >= time; j--) {
//       const curr = dy[j - time] + score;
//       if (curr > dy[j]) dy[j] = curr;
//     }
//   }

//   console.log(dy);
//   return dy[limit];
// }

function solution(limit, arr) {
  const dy = Array.from({ length: limit + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];
    for (let j = limit; j >= time; j--) {
      const curr = dy[j - time] + score;
      if (curr > dy[j]) dy[j] = curr;
    }
  }

  return dy[limit];
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
