// // function solution(m, arr) {
// //   let answer = 0;

// //   let lt = Math.max(...arr);
// //   let rt = arr.reduce((acc, n) => acc + n);
// //   while (lt <= rt) {
// //     const _arr = arr.slice();
// //     const mid = Math.floor((lt + rt) / 2);
// //     let count = 1;

// //     _arr.reduce((sum, n) => {
// //       sum += n;
// //       if (sum <= mid) return sum;
// //       count++;
// //       return n;
// //     }, 0);

// //     if (count <= m) {
// //       answer = mid;
// //       rt = mid - 1;
// //     } else {
// //       lt = mid + 1;
// //     }
// //   }

// //   return answer;
// // }

// function count(arr, mid) {
//   let count = 1;
//   arr.reduce((sum, n) => {
//     sum += n;
//     if (sum <= mid) return sum;
//     count++;
//     return n;
//   });
//   return count;
// }

// function solution(m, arr) {
//   let answer = 0;

//   let lt = Math.max(...arr);
//   let rt = arr.reduce((a, b) => a + b);
//   while (lt <= rt) {
//     const mid = Math.floor((lt + rt) / 2);
//     if (count(arr, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }

//   return answer;
// }

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  let lt = arr[arr.length - 1];
  let rt = arr.reduce((a, b) => a + b);
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    const n = checker(mid);
    if (n <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  function checker(mid) {
    let cnt = 1;
    let sum = 0;
    for (let n of arr) {
      sum += n;
      if (sum > mid) {
        cnt++;
        sum = n;
      }
    }
    return cnt;
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
