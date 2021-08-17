// // function solution(target, arr) {
// //   arr.sort((a, b) => a - b);
// //   let lt = 0;
// //   let rt = arr.length - 1;
// //   let mid = Math.floor((lt + rt) / 2);
// //   while (arr[mid] !== target) {
// //     if (arr[mid] > target) rt = mid - 1;
// //     else lt = mid + 1;
// //     mid = Math.floor((lt + rt) / 2);
// //   }
// //   return mid + 1;
// // }

// function solution(target, arr) {
//   let answer = 0;

//   arr.sort((a, b) => a - b);
//   let lt = 0;
//   let rt = arr.length - 1;
//   while (lt <= rt) {
//     const mid = Math.floor((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) {
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }

//   return answer;
// }

// function solution(target, arr) {
//   arr.sort((a, b) => a - b);

//   while (true) {
//     const mid = Math.floor(arr.length / 2);
//     if (arr[mid] === target) return mid + 1;
//     else if (arr[mid] < target) {
//       arr.splice(0, mid);
//     } else {
//       arr.splice(mid + 1);
//     }
//   }
// }

function solution(target, arr) {
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length - 1;
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) return mid + 1;
    else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
