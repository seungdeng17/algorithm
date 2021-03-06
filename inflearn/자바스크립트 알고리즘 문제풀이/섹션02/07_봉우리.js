// function solution(arr) {
//   let answer = 0;
//   const len = arr.length;

//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       let flag = true;
//       for (let k = 0; k < 4; k++) {
//         const nx = i + dx[k];
//         const ny = j + dy[k];
//         if (nx < 0 || ny < 0 || nx >= len || ny >= len) continue;
//         if (arr[i][j] <= arr[nx][ny]) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

function solution(arr) {
  let answer = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx < 0 || ny < 0 || nx >= arr.length || ny >= arr.length) continue;
        if (arr[nx][ny] > arr[i][j]) flag = false;
      }
      if (flag) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
