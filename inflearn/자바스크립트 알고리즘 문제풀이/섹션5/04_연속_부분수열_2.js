// function solution(arr, m) {
//   let answer = 0;

//   let lt = 0;
//   let sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum <= m) answer += rt - lt + 1;
//     while (sum > m) {
//       sum -= arr[lt++];
//       if (sum <= m) answer += rt - lt + 1;
//     }
//   }

//   return answer;
// }

function solution(arr, m) {
  let answer = 0;

  let sum = 0;
  let lt = 0;
  let rt = 0;
  while (rt < arr.length) {
    sum += arr[rt];
    if (sum <= m) {
      answer += rt - lt + 1;
    } else {
      while (sum > m) {
        sum -= arr[lt];
        lt++;
      }
      answer += rt - lt + 1;
    }
    rt++;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
