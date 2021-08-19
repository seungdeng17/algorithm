// // function solution(arr) {
// //   const dy = Array.from({ length: arr.length }, () => 0);

// //   for (let i = 0; i < arr.length; i++) {
// //     const curr = arr[i];
// //     let len = 0;
// //     for (let j = i - 1; j >= 0; j--) {
// //       if (curr > arr[j] && dy[j] > len) len = dy[j];
// //     }
// //     dy[i] = ++len;
// //   }

// //   return Math.max(...dy);
// // }

// function solution(arr) {
//   const dy = [];

//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];
//     let len = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       if (curr > arr[j] && dy[j] > len) len = dy[j];
//     }
//     dy[i] = ++len;
//   }

//   console.log(dy);
//   return Math.max(...dy);
// }

function solution(arr) {
  const dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (curr > arr[j] && dy[j] > max) max = dy[j];
    }
    dy[i] = ++max;
  }

  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
