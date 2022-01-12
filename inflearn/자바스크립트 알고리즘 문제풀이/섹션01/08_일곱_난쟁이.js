// // function solution(arr) {
// //   const sum = arr.reduce((acc, n) => acc + n);
// //   for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (sum - (arr[i] + arr[j]) === 100) {
// //         arr.splice(i, 1);
// //         arr.splice(j - 1, 1);
// //       }
// //     }
// //   }
// //   return arr;
// // }

// function solution(arr) {
//   const total = arr.reduce((a, b) => a + b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (total - (arr[i] + arr[j]) === 100) {
//         return arr.filter((_, index) => !(index === i || index === j));
//       }
//     }
//   }
// }

function solution(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        return arr.filter((_, index) => index !== i && index !== j);
      }
    }
  }
}

console.log(solution([20, 7, 23, 19, 10, 15, 8, 13, 25]));
