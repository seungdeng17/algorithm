// // function solution(arr, day) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length - 2; i++) {
// //     const _sum = arr[i] + arr[i + day - 2] + arr[i + day - 1];
// //     sum = Math.max(sum, _sum);
// //   }
// //   return sum;
// // }

// function solution(arr, k) {
//   let answer = Number.MIN_SAFE_INTEGER;

//   let sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];
//   answer = sum;

//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     answer = Math.max(answer, sum);
//   }

//   return answer;
// }

function solution(arr, k) {
  let answer = Number.MIN_SAFE_INTEGER;

  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  let lt = 0;
  for (let rt = k; rt < arr.length; rt++) {
    sum -= arr[lt++];
    sum += arr[rt];
    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
