// // // // function solution(arr, target) {
// // // //   let answer = [];
// // // //   let p1 = 0;
// // // //   let p2 = 0;
// // // //   let sum = 0;

// // // //   while (p2 < arr.length) {
// // // //     if (sum === target) {
// // // //       answer.push(arr.slice(p1, p2));
// // // //       sum -= arr[p1];
// // // //       p1++;
// // // //     }
// // // //     if (sum > target) {
// // // //       sum -= arr[p1];
// // // //       p1++;
// // // //     }
// // // //     if (sum < target) {
// // // //       sum += arr[p2];
// // // //       p2++;
// // // //     }
// // // //   }

// // // //   return answer;
// // // // }

// // // function solution(arr, target) {
// // //   const answer = [];
// // //   let p1 = 0;
// // //   let p2 = 0;
// // //   let sum = 0;

// // //   while (p2 < arr.length) {
// // //     if (sum < target) sum += arr[p2++];
// // //     else if (sum > target) sum -= arr[p1++];
// // //     else {
// // //       answer.push(arr.slice(p1, p2));
// // //       sum += arr[p2++];
// // //     }
// // //   }

// // //   return answer;
// // // }

// // function solution(arr, m) {
// //   let answer = 0;

// //   let p1 = 0;
// //   let p2 = 0;
// //   let sum = 0;

// //   while (p1 < arr.length && p2 < arr.length) {
// //     if (sum === m) {
// //       console.log(p1, p2, arr.slice(p1, p2));
// //       answer++;
// //       sum += arr[p2];
// //       p2++;
// //     } else if (sum < m) {
// //       sum += arr[p2];
// //       p2++;
// //     } else if (sum > m) {
// //       sum -= arr[p1];
// //       p1++;
// //     }
// //   }

// //   return answer;
// // }

// function solution(arr, m) {
//   let answer = 0;

//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum > m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }

//   return answer;
// }

function solution(arr, m) {
  let sum = 0;
  let lt = 0;
  let rt = 0;
  while (rt < arr.length) {
    if (sum === m) {
      console.log(arr.slice(lt, rt));
      sum += arr[rt++];
    } else if (sum < m) {
      sum += arr[rt++];
    } else {
      sum -= arr[lt++];
    }
  }
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
