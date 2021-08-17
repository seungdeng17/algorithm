// // // function solution(arr) {
// // //   const answer = [];

// // //   for (let i = 1; i <= arr[0].length; i++) {
// // //     for (let j = 1; j <= arr[0].length; j++) {
// // //       let count = 0;
// // //       let pi;
// // //       let pj;
// // //       for (let k = 0; k < arr.length; k++) {
// // //         for (let s = 0; s < arr[0].length; s++) {
// // //           if (arr[k][s] === i) pi = s;
// // //           if (arr[k][s] === j) pj = s;
// // //         }
// // //         if (pi < pj) count++;
// // //       }
// // //       if (count === arr.length) answer.push([i, j]);
// // //     }
// // //   }

// // //   return answer;
// // // }

// // // console.log(
// // //   solution([
// // //     [3, 4, 1, 2],
// // //     [4, 3, 2, 1],
// // //     [3, 1, 4, 2],
// // //   ])
// // // );

// // function solution(arr) {
// //   const answer = [];

// //   for (let i = 1; i <= arr[0].length; i++) {
// //     for (let j = 1; j <= arr[0].length; j++) {
// //       if (i === j) continue;
// //       let count = 0;
// //       for (let k = 0; k < arr.length; k++) {
// //         const m1 = arr[k].indexOf(i);
// //         const m2 = arr[k].indexOf(j);
// //         if (m1 < m2) count++;
// //       }
// //       if (count === arr.length) answer.push([i, j]);
// //     }
// //   }

// //   return answer;
// // }

// function solution(arr) {
//   const answer = [];

//   for (let j = 0; j < arr[0].length - 1; j++) {
//     let m1 = arr[0][j];
//     for (let k = j + 1; k < arr[0].length; k++) {
//       let m2 = arr[0][k];
//       let flag = true;
//       for (let l = 0; l < arr.length; l++) {
//         if (arr[l].indexOf(m1) > arr[l].indexOf(m2)) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) answer.push([m1, m2]);
//     }
//   }

//   return answer;
// }

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr[0].length - 1; i++) {
    for (let j = i + 1; j < arr[0].length; j++) {
      const s1 = arr[0][i];
      const s2 = arr[0][j];
      let flag = true;
      for (let k = 0; k < arr.length; k++) {
        if (arr[k].indexOf(s1) > arr[k].indexOf(s2)) {
          flag = false;
          break;
        }
      }
      if (flag) answer.push([s1, s2]);
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
