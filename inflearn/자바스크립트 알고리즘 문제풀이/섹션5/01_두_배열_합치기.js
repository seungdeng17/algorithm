// // function solution(arr1, arr2) {
// //   const answer = [];
// //   let p1 = 0;
// //   let p2 = 0;

// //   while (p1 < arr1.length || p2 < arr2.length) {
// //     if (!arr2[p2] || arr1[p1] <= arr2[p2]) {
// //       answer.push(arr1[p1]);
// //       p1++;
// //     } else if (!arr1[p1] || arr1[p1] > arr2[p2]) {
// //       answer.push(arr2[p2]);
// //       p2++;
// //     }
// //   }

// //   return answer;
// // }

// function solution(arr1, arr2) {
//   const answer = [];
//   let p1 = 0;
//   let p2 = 0;

//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
//     else answer.push(arr2[p2++]);
//   }
//   while (p1 < arr1.length) answer.push(arr1[p1++]);
//   while (p2 < arr2.length) answer.push(arr2[p2++]);

//   return answer;
// }

function solution(arr1, arr2) {
  const answer = [];

  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

console.log(solution([1, 3, 5, 8, 10, 12], [2, 3, 6, 7, 9]));
