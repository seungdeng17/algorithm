// function solution(m, arr) {
//   let answer = 0;

//   let lt = 0;
//   let rt = 0;
//   while (rt < arr.length) {
//     let sum = 0;
//     for (let i = lt; i <= rt; i++) sum += arr[i];

//     if (sum < m) rt++;
//     else if (sum > m) lt++;
//     else {
//       answer++;
//       rt++;
//     }
//   }

//   return answer;
// }

function solution(m, arr) {
  let answer = 0;

  let lt = 0;
  let rt = 0;
  let sum = 0;
  while (rt < arr.length) {
    if (sum < m) sum += arr[rt++];
    else sum -= arr[lt++];

    if (sum === m) answer++;
  }

  return answer;
}

console.log(solution(5, [1, 2, 3, 4, 2, 5, 3, 1, 1, 2]));
console.log(solution(2, [1, 1, 1, 1]));
