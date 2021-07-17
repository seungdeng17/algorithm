// function solution(arr, target) {
//   const answer = [];
//   let p1 = 0;
//   let p2 = 0;
//   let sum = 0;

//   while (p2 < arr.length) {
//     sum += arr[p2];
//     if (arr[p2] <= target) answer.push([arr[p2]]);

//     if (sum + arr[p2 + 1] > target) {
//       while (p1 !== p2) {
//         sum -= arr[p1];
//         if (sum <= target) {
//           answer.push(arr.slice(p1, p2 + 1));
//         }
//         p1++;
//       }
//     }

//     if (sum <= target && p1 !== p2) {
//       answer.push(arr.slice(p1, p2 + 1));
//     }
//     p2++;
//   }

//   return answer;
// }

function solution(arr, target) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;
  let sum = 0;

  while (p2 < arr.length) {
    sum += arr[p2];
    if (arr[p2] <= target) answer.push([arr[p2]]);
    if (sum + arr[p2 + 1] > target) {
      while (p1 !== p2) {
        sum -= arr[p1];
        if (sum <= target) answer.push(arr.slice(p1, p2 + 1));
        p1++;
      }
    }
    if (sum <= target && p1 !== p2) answer.push(arr.slice(p1, p2 + 1));
    p2++;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
